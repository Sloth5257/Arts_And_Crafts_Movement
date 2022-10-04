let Mycanvas, cam;
let Photoframe = [];
let N = 1;
let Ka = false;

function preload()
{
  Photoframe[1] = loadImage("images/TakePic/04_TakaPic_Photoframe_01.png");
  Photoframe[2] = loadImage("images/TakePic/04_TakaPic_Photoframe_02.png");
  Photoframe[3] = loadImage("images/TakePic/04_TakaPic_Photoframe_03.png");
}

function setup() 
{
  Mycanvas = createCanvas(windowWidth, windowHeight); Mycanvas.id('Mycanvas');
  cam = createCapture(VIDEO);
  cam.size(width*0.91, (width*0.91/4)*3); cam.hide();
  circleMask = createGraphics(128, 128);
}

function draw() 
{
  if(!Ka)
  {
    circleMask.fill('rgba(0, 0, 0, 1)');
    circleMask.ellipse(64, 64, 128/4*3, 128);
    cam.mask(circleMask);
    image(cam, width*0.046, width*0.33, width*0.91, (width*0.91/4)*3);
    image(Photoframe[N], width*-0.05, width*0.1, width, (width/1201)*1600);
  }
}

function KaF() { Ka = true;  }
function FB()  { Ka = false; }
function Photoframe1() { N = 1; Ka = false; clear();}
function Photoframe2() { N = 2; Ka = false; clear();}
function Photoframe3() { N = 3; Ka = false; clear();}

$(document).ready(function()
{
  var FB_But = document.querySelector('#Front_Back');
  $("#Front_Back").css("width" , FB_But.offsetHeight);
  $("#Front_Back").css("left"  , window.innerWidth/2 + FB_But.offsetHeight*1.55);
});


$(window).resize(function() { window.location.reload(); });  