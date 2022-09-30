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

$(window).resize(function()
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

function But1()
{
    console.log("B1"); 
    //window.location.href='menu.html';
}

function But2()
{
    console.log("B2"); 
    //window.location.href='menu.html';
}

function But3()
{
    console.log("B3"); 
    //window.location.href='menu.html';
}

function But4()
{
    console.log("B4"); 
    //window.location.href='menu.html';
}