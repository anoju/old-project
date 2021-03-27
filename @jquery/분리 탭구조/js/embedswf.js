/**
 * embedSWF v0.14a: Flash Player detection and embed
 *
 * author : 이용욱 (oneweb@vi-nyl.com) 
 */

var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var isFF = (navigator.userAgent.indexOf("Firefox") != -1) ? true : false;

function getSwfHTML( swfUrl, width, height, attributesObj, paramsObj, optionsObj )
{
	var prop = '';
	var flashVars = '';
	var swfHTML = '';

	for( var prop in optionsObj ) 
	{ 
		var arg = optionsObj[prop];
		flashVars = flashVars+"&"+prop+"="+arg; 
	}

	attributesObj["width"] = width;
	attributesObj["height"] = height;

	paramsObj["quality"] = 'high';
	paramsObj["flashvars"] = flashVars;

	var protocol = ( location.protocol == 'https:' ) ? 'https://' : 'http://';

	if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length)
	{
		attributesObj["type"] = 'application/x-shockwave-flash';
		attributesObj["pluginspage"] = protocol + 'www.adobe.com/go/getflashplayer';

		attributesObj["name"] = attributesObj["id"];
		paramsObj["src"] = swfUrl;

		swfHTML = '<embed ';
		for( prop in attributesObj ) { swfHTML += prop + '="' + attributesObj[prop] + '" '; }
		for( prop in paramsObj ) { swfHTML += prop + '="' + paramsObj[prop] + '" '; }
		swfHTML += '>';
	}
	else
	{	  
		attributesObj["classid"] = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
		attributesObj["codebase"] = protocol + 'fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0';

		paramsObj["movie"] = swfUrl;

		swfHTML = '<object ';
		for( prop in attributesObj ) { swfHTML += prop + '="' + attributesObj[prop] + '" '; }
		swfHTML += '>';
		for( prop in paramsObj ) { swfHTML += '<param name="' + prop + '" value="' + paramsObj[prop] + '">'; }
		swfHTML += '</object>';
	} 

	return swfHTML;
}

function protocalName()
{
	var strTemp;
    var strImsi;
    strTemp = location.hostname;
    if (strTemp.toLowerCase().indexOf("local") == 0) {
        strImsi = "http://";
    }
    else {
        strImsi = "https://";
    }
    return strImsi;
}

function printSWF( swfUrl, width, height, attributesObj, paramsObj, optionsObj )
{
	document.write( getSwfHTML( swfUrl, width, height, attributesObj, paramsObj, optionsObj ) );
}

function embedSWF( divID, swfUrl, width, height, attributesObj, paramsObj, optionsObj ) 
{
	var layer = (typeof divID == 'string') ? document.getElementById(divID) : divID;
	layer.innerHTML = getSwfHTML( swfUrl, width, height, attributesObj, paramsObj, optionsObj );
	if ( layer.style.display == 'none' )
	{
		layer.style.display = 'inline';
	}
}

function clearSWF( divID )
{
	var layer = (typeof divID == 'string') ? document.getElementById(divID) : divID;
	layer.innerHTML = '';
	layer.style.display = 'none';
}
