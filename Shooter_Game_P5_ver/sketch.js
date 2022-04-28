let Move = false; let MoveX = 0; let MoveY = 0;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  background(220);
  
  //Player
  fill(50); noStroke(); 
  ellipse(width/2+MoveX, height/2+MoveY, height*0.10);
  
  
  
  //方向鍵與攻擊鍵
  fill(0, 25); noStroke(); 
  if(width >= height) 
  { 
    ellipse(height*0.2, height*0.8, height*0.3);
    ellipse(height*0.2, height*0.8, height*0.3);
  }
  if(width <  height) { ellipse(width*0.2,  height-width*0.2, width*0.3);}
  if (mouseIsPressed)
  {
    if(width >= height)
    {
      if(dist(height*0.2, height*0.8, mouseX, mouseY) < height*0.2) { Move = true; }
      if(Move)
      {
        let a = atan2(mouseY - height*0.8, mouseX - height*0.2);
        translate(height*0.2, height*0.8);
        push(); rotate(a); fill(255, 50); ellipse(height*0.075, 0, height*0.10); pop();
        MoveX += (mouseX - height*0.2)/10; MoveY += (mouseY - height*0.8)/10;
      }
    }
    if(width <  height)
    {
      if(dist(width*0.2,  height-width*0.2, mouseX, mouseY) < width*0.2) { Move = true; }
      if(Move)
      {
        let a = atan2(mouseY - (height-width*0.2), mouseX - width*0.2);
        translate(width*0.2, height-width*0.2);
        push(); rotate(a); fill(255, 50); ellipse(width*0.05, 0, width*0.10); pop();
        MoveX += (mouseX - width*0.2)/10; MoveY += (mouseY - (height-width*0.2))/10;
      }
    }
    
    let X = constrain(MoveX,  -width/2+height*0.05,  width/2-height*0.05);
    let Y = constrain(MoveY, -height/2+height*0.05, height/2-height*0.05);
    MoveX = X; MoveY = Y;
  }
  else
  {
    fill(255, 50); 
    if(width >= height) { ellipse(height*0.2, height*0.8, height*0.10); }
    if(width <  height) { ellipse(width*0.2,  height-width*0.2, width*0.10); }
    Move = false;
  }
}
