var Vid_1;

function preload() 
{
  Vid_1 = createVideo('Video/1..mp4');
}

function setup() 
{
  createCanvas(windowWidth,windowWidth/16*9);
}

function mousePressed() 
{
  Vid_1.hide();
  Vid_1.play();
  Vid_1.onended(end);
}

function draw() 
{
  background(0);
  image(Vid_1,0,0,windowWidth,windowWidth/16*9);
}

function end()
{
  print("end");
}