document.addEventListener( 'DOMContentLoaded', function () {new Splide( '.splide' ).mount();}); 

$(document).ready(function()
{
    var Screen_W = window.innerHeight / window.innerWidth; 

    if(Screen_W > 1387/781)
    {
        $(".BG").css("width" , "auto");
        $(".BG").css("height", "100vh" );
    }
});

$(window).resize(function() { window.location.reload(); });  