$(document).ready(function()
{
    var Screen_W = window.innerWidth / window.innerHeight; console.log("螢幕比例 : " + Screen_W); 

    if(Screen_W > 781/1387)
    {
        $("#BG").css("width" , "100vw");
        $("#BG").css("height", "auto" );
    }
});

function Start()
{
    window.location.href='menu.html';
}