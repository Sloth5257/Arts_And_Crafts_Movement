let cam;
let canvas;
let ctracker;

function setup() 
{
  createCanvas(640, 980);
  
  //setup camera
  cam = createCapture(VIDEO);
  cam.size(640, 640);
  cam.hide();
  
  circleMask = createGraphics(128, 128);
}

function draw() 
{
  circleMask.fill('rgba(0, 0, 0, 1)');
  circleMask.circle(64, 64, 128);
  cam.mask(circleMask);
  image(cam,0,0);
}