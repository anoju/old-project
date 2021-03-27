/**
 * expressinstall v0.1: Flash Player detection and redirect 
 *
 * author : 이용욱 (oneweb@vi-nyl.com) 
 */

var requiredVer = "9.0.115";
var expressVer = "6.0.65";

if ( versionIsValid( getPlayerVersion( expressVer, "." ) ) && ! versionIsValid( getPlayerVersion( requiredVer, "." ) ) ) 
{
	alert( "플래시 버전이 낮습니다 ( required : " + requiredVer + " )\r플래시 플레이어 다운로드 페이지로 이동합니다" );
	location.href( "http://get.adobe.com/kr/flashplayer/" );

	/*var expressOption = { MMredirectURL:"", MMdoctitle:document.title };
	if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) 
	{
		expressOption.MMplayerType = "PlugIn";
	}
	else
	{
		expressOption.MMplayerType = "ActiveX";
	}

	embedSWF( "expressLayer", "./swf/expressInstall.swf", "100%", "100%", null, { wmode:"transparent" }, expressOption );*/
}

function getPlayerVersion( strVer, delimiter )
{
	var major = 0;
	var minor = 0;
	var rev = 0;
	var arrVersion = strVer.split( delimiter );
	major = ( arrVersion[0] != null ) ? parseInt(arrVersion[0]) : 0;
	minor = ( arrVersion[1] != null ) ? parseInt(arrVersion[1]) : 0;
	rev = ( arrVersion[2] != null ) ? parseInt(arrVersion[2]) : 0;
	return { major:major, minor:minor, rev:rev };
}

function versionIsValid( fv )
{
	var installedVer = getFlashInstalledVer();

	if(installedVer.major < fv.major) return false;
	if(installedVer.major > fv.major) return true;
	if(installedVer.minor < fv.minor) return false;
	if(installedVer.minor > fv.minor) return true;
	if(installedVer.rev < fv.rev) return false;
	return true;
}

function getFlashInstalledVer()
{
	var verObj;
	var major = 0;
	var minor = 0;
	var rev = 0;

	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) 
		{
			verObj = getPlayerVersion( x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."), "." );
			major = verObj.major;
			minor = verObj.minor;
			rev = verObj.rev;
		}
	}else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0){ // if Windows CE
		var axo = 1;
		var counter = 3;
		while(axo) {
			try {
				counter++;
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+ counter);
				major = counter;
			} catch (e) {
				axo = null;
			}
		}
	} else { // Win IE (non mobile)
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				verObj = getPlayerVersion( "6.0.21", "." );
				major = verObj.major;
				minor = verObj.minor;
				rev = verObj.rev;
				axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (major == 6) {
					return { major:major, minor:minor, rev:rev };
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			verObj = getPlayerVersion( axo.GetVariable("$version").split(" ")[1], "," );
			major = verObj.major;
			minor = verObj.minor;
			rev = verObj.rev;
		}
	}
	return { major:major, minor:minor, rev:rev };
}