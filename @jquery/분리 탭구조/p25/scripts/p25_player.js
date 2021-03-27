if ($('#p25_content').hasClass('p25_pdp')) $("#player_container").addClass("player_pdp");

function embedPlayer(xml, chapter) {
    // Example: embedPlayer('/us_non_production_assets/flash/player/xml/player_config.xml','picturequality')
    var flashvars = {};
    flashvars.config_file = xml;
    flashvars.share = "./p25/flash/player/xml/player_share.xml";
    flashvars.main_file = "./p25/flash/player/videoplayer.swf";
    flashvars.css_file = "./p25/flash/player/css/flash.css";
    if (chapter!=undefined && chapter!="") flashvars.video_id = chapter;
    flashvars.debug = "false";
    // possible values are: verbose, warning, error
    flashvars.log_level = "";

    // Make player
    makePlayer(flashvars);
}

function embedVideo(video_file, video_title, widescreen, share_img) {
    var flashvars = {};
    // Standard Flash params
    flashvars.share = "./p25/flash/player/xml/player_share.xml";
    flashvars.main_file = "./p25/flash/player/videoplayer.swf";
    flashvars.css_file = "./p25/flash/player/css/flash.css";
    flashvars.debug = "false";
    // possible values are: verbose, warning, error
    flashvars.log_level = "";

    //parameters for single video without a config file
    // Example: embedVideo("/us_non_production_assets/flash/player/video/Music_VO/1200/LED_7000_innovation.flv","Innovation",true)
    flashvars.flv_path = video_file;
    flashvars.video_title = video_title;
    // Get the URL of this page
    flashvars.share_link = location.href;
    // Get the title of this page
    flashvars.share_title = document.title;
    // Widescreen? (true or false)
    flashvars.widescreen = ((widescreen!=undefined) && ((widescreen == "false") || !widescreen))?"false":"true";
    // If an image was passed, use that, otherwise, use a default 120x120 image
    // This is for the email that gets sent
    if (share_img!=undefined && share_img!="") flashvars.share_image = share_img;
    else flashvars.share_image = "http://www.samsung.com/uk/p2images/common/logo.png";

     // Localized "close demo" copy
     flashvars.close_copy = "close demo";

    // Make player
    makePlayer(flashvars);
}

function makePlayer(flashvars) {
    var params = {};
    params.allowScriptAccess = "always"
    params.wmode = "opaque"
    params.allowFullScreen = "true"

    var attributes = {};
    attributes.id = "o_player";
    attributes.name = "o_player";

    // Embed player
    $("#player_container").prepend("<div id='player'></div>");
    swfobject.embedSWF("./p25/flash/player/videoplayer_preloader.swf", "player", "896", "504", "9.0.115", "js/expressInstall.swf", flashvars, params, attributes);

    // Unhide the Flash and grey out the rest of the page
    $("#player_embedlayer").removeClass("player_hide");
    windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    pgHeight = Math.max(Math.max(document.body.scrollHeight, 630), windowHeight);
    $("#player_overlay").css("height",pgHeight+"px");
    $("#player_overlay").removeClass("player_hide");
}

function closePlayer() {
    // Display the page again and close the Flash layer
    $("#player_overlay").addClass("player_hide");
    $("#player_embedlayer").addClass("player_hide");
    // Destroy the Flash
    $("#o_player").remove();
}


$('#player_overlay').click(function(){
    closePlayer();
})

