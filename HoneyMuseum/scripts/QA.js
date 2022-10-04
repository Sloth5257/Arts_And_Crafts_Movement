document.addEventListener( 'DOMContentLoaded', function () {new Splide( '.splide' ).mount();}); 

$(document).ready(function()
{
    var Splide_X = $(".splide__pagination").offset().left;
    var Splide_Y = $(".splide__pagination").offset().top;
    var Splide_O = document.querySelector('.splide__pagination');
    var Splide_H = Splide_O.offsetHeight;

    console.log(Splide_X + " , " + Splide_Y + " , " + Splide_H);

    $("#GreenBut").css("top"   , Splide_Y + Splide_H/2 + 3);
    $("#GreenBut").css("left"  , Splide_X*-1);
    $("#GreenBut").css("width" , (375/781)*208);
});

$(window).resize(function() { window.location.reload(); });  