$(document).ready(function()
{
    var Screen_W = window.innerWidth / window.innerHeight; 

    if(Screen_W > 781/1387)
    {
        $("#BG").css("width" , "100vw");
        $("#BG").css("height", "auto" );
    }

    $("#But").css("width" , window.innerWidth);
    $("#But").css("height", (window.innerWidth/781)*1387 );
});

$(window).resize(function() { window.location.reload(); });  