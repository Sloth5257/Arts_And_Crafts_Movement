let Move = false; let MoveX = 0; let MoveY = 0; let _r = 0;
let virus = []; let virus_Ran; let virusX, virusY; let _virusX = 0; let _virusY = 0; let virusA = 0;
let virusEX = 0; let virusEY = 0; let virusF = [];
let attack = []; let shot = true; let shotB = true; let power = 5400;
let targetX = 0; let targetY = 0; let easing = 0.1;

function preload()
{
  for(let i=0; i<=6; i++) { virus[i] = loadImage("virus0"+i+".png"); }
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  virus_Ran = int(random(0, 7));
  virusX = width*0.5; virusY = height*0.25;
  MoveX = width/2; MoveY = height/1.5;
  for(let i = 1; i<=5; i++) { virusF[i] = 0; }
  setTimeout(shotstart, 500);
  setTimeout(VirusF,   2000);
}

function shotstart() { shot = true; setTimeout(shotstart, 500); }

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});

function VirusF()
{
  virusF[1] = int(random(-20, 20));
  virusF[2] = int(random(-20, 20));
  virusF[5] = 0;
  virusF[6] = int(random(1, 3));
  setTimeout(VirusF, 2000);
}

function draw() 
{
  background(220);
  
  //Player 
  angleMode(DEGREES);
  let r = atan2(_virusY - MoveY, _virusX - MoveX);
  push();
  translate(MoveX, MoveY);
  if(shotB) { rotate(r); } else { rotate(_r); } print(shotB);
  noFill(); stroke(50); strokeWeight(1);
  if(power <= -5400) { line(0+height*5, 0, 0, 0); } else { line(0+height*0.10, 0, 0, 0); }
  if(power == -15000) { strokeWeight(5); stroke(200, 50, 50); line(0+height*5, 0, 0, 0); setTimeout(Repower, 500);}
  fill(50); noStroke(); 
  ellipse(0, 0, height*0.08);
  noFill(); stroke(50); strokeWeight(1);
  arc(0, 0, height*0.15, height*0.15, radians(-5400), radians(5400));
  strokeWeight(5); stroke(150);
  if(power == -15000) { stroke(200, 50, 50); }
  arc(0, 0, height*0.14, height*0.14, radians(power), radians(5400));
  pop();
  for( let i = 0 ; i < attack.length ; i++) { attack[i].move(); }
  if(attack.length > 10) { attack.splice(0,1); }
  
  //Virus
  virusX = width /2 - ( MoveX - width /2 ) + virusEX;
  virusY = height/2 - ( MoveY - height/2 ) + virusEY;
  if(dist(MoveX, MoveY, virusX, virusY) <= height*0.2)
  {
    virusEX += (virusX-MoveX) /10;
    virusEY += (virusY-MoveY) /10;
  }
  else if(virusY < height*0.1) 
  {
    virusEY += int(random(1, 20));
  }
  else if(virusY > height*0.9 ) 
  {
    virusEY -= int(random(1, 20));
  }
  else if(virusX < width*0.1) 
  {
    virusEX += int(random(1, 20));
  }
  else if(virusX > width*0.9) 
  {
    virusEX -= int(random(1, 20));
  }
  else
  {
    virusEX += virusF[1];
    virusEY += virusF[2];
  }
  
  targetX = virusX; targetY = virusY;
  _virusX += (targetX - _virusX) * easing;
  _virusY += (targetY - _virusY) * easing;
  /*
  if(virusF[5] != 0)
  {
    _virusX = MoveX + virusF[3] * cos(virusF[4]);
    _virusY = MoveY + virusF[3] * sin(virusF[4]);
  }*/

  let X = constrain(_virusX, height*0.1,  width-height*0.1);
  let Y = constrain(_virusY, height*0.1, height-height*0.1);
  _virusX = X; _virusY = Y;
  
  imageMode(CENTER); image(virus[virus_Ran], _virusX, _virusY, height*0.15, height*0.15);
  /*
  if(virusX < width*0.1 || virusX > width*0.9) 
  { 
    virusF[1] =  virusF[1] * -1;
    virusEY   += virusF[2] *  5;
  }
  else if(virusY < height*0.1 || virusY > height*0.9 ) 
  { 
    if(virusR == 1) { virusR = -1; } else { virusR = 1; }
    virusEX += 2;
  }
  else
  {
    virusX = MoveX + height/2 * cos(virusA) + virusEX;
    virusY = MoveY + height/2 * sin(virusA) + virusEY;
  }
  
  virusX = MoveX + height/2 * cos(virusA) + virusEX;
  virusY = MoveY + height/2 * sin(virusA) + virusEY;
  
  virusA += virusF[1] * 1;
  let X = constrain(virusX, height*0.1,  width-height*0.1);
  let Y = constrain(virusY, height*0.1, height-height*0.1);
  virusX = X; virusY = Y;
  imageMode(CENTER); image(virus[virus_Ran], virusX, virusY, height*0.15, height*0.15);
  */
  /*
  push();
  translate(MoveX, MoveY);
  rotate(r); print(r);
  push();
  translate(height/2, 0); rotate(-r);
  imageMode(CENTER); image(virus[virus_Ran], 0, 0, height*0.2, height*0.2)
  pop();pop();
  */
  /*
  if(width >= height)
  {
    if(dist(MoveX, MoveY, virusX, virusY) <= height*0.5)
    {
      virusX += (virusX-MoveX) /100;
      virusY += (virusY-MoveY) /100;
    }
  }
  
  imageMode(CENTER); image(virus[virus_Ran], virusX, virusY, height*0.2, height*0.2);*/
  
  //方向鍵與攻擊鍵
  fill(0, 25); noStroke(); 
  if(width >= height) //橫螢幕UI
  { 
    ellipse(height*0.2, height*0.8, height*0.30);
    ellipse(width-height*0.125, height*0.875, height*0.15);
    ellipse(width-height*0.125, height*0.663, height*0.15);
    fill(0, 100); textSize(32); textAlign(CENTER, CENTER);
    text("Z", width-height*0.125, height*0.875);
    text("X", width-height*0.125, height*0.663);
  }
  if(width <  height) //直螢幕UI
  { 
    ellipse(width*0.2,  height-width*0.2, width*0.3);
    ellipse(width-width*0.125, height-width*0.125, width*0.15);
    ellipse(width-width*0.125, height-width*0.367, width*0.15);
    fill(0, 100); textSize(32); textAlign(CENTER, CENTER);
    text("Z", width-width*0.125, height-width*0.125);
    text("X", width-width*0.125, height-width*0.367);
  }
  
  let a = -1; let b = -1; let c = -1; if(power < 5400 && power != -15000) power += 300;
  
  for (var i = 0; i < touches.length; i++) 
  {
    ellipse(touches[i].x, touches[i].y, 50, 50);
    if(width >= height)
    {
      if(dist(height*0.2, height*0.8, touches[i].x, touches[i].y) < height*0.3) { c = i; }
      if(dist(width-height*0.125, height*0.875, touches[i].x, touches[i].y) < height*0.1 && shot) { a = i; }
      if(dist(width-height*0.125, height*0.663, touches[i].x, touches[i].y) < height*0.1 && shot) { b = i; }
      
      if(c!=-1)
      {
        if(dist(height*0.2, height*0.8, touches[c].x, touches[c].y) < height*0.2) { Move = true; }
        if(Move)
        {
          let f = atan2(touches[c].y - height*0.8, touches[c].x - height*0.2);
          translate(height*0.2, height*0.8);
          push(); rotate(f); fill(255, 50); ellipse(height*0.075, 0, height*0.10); pop();
          MoveX += (touches[c].x - height*0.2)/10; MoveY += (touches[c].y - height*0.8)/10;
        }
      }
      if(a!=-1){if(dist(width-height*0.125, height*0.875, touches[a].x, touches[a].y) < height*0.1 && shot) 
      { 
        let d = new Attack(MoveX, MoveY, _virusX, _virusY);
        //virusF[3] = dist(MoveX, MoveY, _virusX, _virusY); virusF[5] = int(random(1, 11));
        attack.push(d); shot = false;
      }}
      if(b!=-1){if(dist(width-height*0.125, height*0.663, touches[b].x, touches[b].y) < height*0.1 && shot) 
      {
        if(power > -15000) { power -= 600; }
        virusX += int(random(-20, 20)); virusY += int(random(-20, 20));
        if(shotB) { _r = atan2(_virusY - MoveY, _virusX - MoveX); } shotB = false;
      }} else { shotB = true; }
    }
    if(width <  height)
    {
      if(dist(width*0.2,  height-width*0.2, touches[i].x, touches[i].y) < width*0.3) { c = i; }
      if(dist(width-width*0.125, height-width*0.125, touches[i].x, touches[i].y) < width*0.1 && shot) { a = i; }
      if(dist(width-width*0.125, height-width*0.367, touches[i].x, touches[i].y) < width*0.1 && shot) { b = i; }
      
      if(c!=-1)
      {
        if(dist(width*0.2,  height-width*0.2, touches[c].x, touches[c].y) < width*0.2) { Move = true; }
        if(Move)
        {
          let f = atan2(touches[c].y - (height-width*0.2), touches[c].x - width*0.2);
          translate(width*0.2, height-width*0.2);
          push(); rotate(f); fill(255, 50); ellipse(width*0.05, 0, width*0.10); pop();
          MoveX += (touches[c].x - width*0.2)/10; MoveY += (touches[c].y - (height-width*0.2))/10;
        }
      }
      if(a!=-1){if(dist(width-width*0.125, height-width*0.125, touches[a].x, touches[a].y) < width*0.1 && shot)
      {
        let d = new Attack(MoveX, MoveY, _virusX, _virusY);
        //virusF[3] = dist(MoveX, MoveY, _virusX, _virusY); virusF[5] = int(random(1, 11));
        attack.push(d); shot = false;
      }}
      if(b!=-1){if(dist(width-width*0.125, height-width*0.367, touches[b].x, touches[b].y) < width*0.1 && shot) 
      {
        power -= 300;
        virusX += int(random(-20, 20)); virusY += int(random(-20, 20));
        if(shotB) { _r = atan2(_virusY - MoveY, _virusX - MoveX); } shotB = false;
      }} else { shotB = true; }
    }
    let X = constrain(MoveX, height*0.04,  width-height*0.04);
    let Y = constrain(MoveY, height*0.04, height-height*0.04);
    MoveX = X; MoveY = Y;
  }
  
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
      if(dist(width-height*0.125, height*0.875, mouseX, mouseY) < height*0.10 && shot) 
      { 
        let b = new Attack(MoveX, MoveY, _virusX, _virusY);
        attack.push(b); shot = false;
      }
      if(dist(width-height*0.125, height*0.663, mouseX, mouseY) < height*0.10 && shot) 
      {
        if(power > -15000) { power -= 600; }
        virusX += int(random(-20, 20)); virusY += int(random(-20, 20));
        if(shotB) { _r = atan2(_virusY - MoveY, _virusX - MoveX); } shotB = false;
      } else { shotB = true; }
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
      if(dist(width-width*0.125, height-width*0.125, mouseX, mouseY) < width*0.10 && shot) 
      { 
        let b = new Attack(MoveX, MoveY, _virusX, _virusY);
        attack.push(b); shot = false;
      }
      if(dist(width-width*0.125, height-width*0.367, mouseX, mouseY) < height*0.10 && shot) 
      {
        if(power > -15000) { power -= 600; }
        virusX += int(random(-20, 20)); virusY += int(random(-20, 20));
        if(shotB) { _r = atan2(_virusY - MoveY, _virusX - MoveX); } shotB = false;
      } else { shotB = true; }
    }
    
    let X = constrain(MoveX, height*0.05,  width-height*0.05);
    let Y = constrain(MoveY, height*0.05, height-height*0.05);
    MoveX = X; MoveY = Y;
    
  }
  else
  {
    fill(255, 50); 
    if(width >= height) { ellipse(height*0.2, height*0.8, height*0.10); }
    if(width <  height) { ellipse(width*0.2,  height-width*0.2, width*0.10); }
    Move = false;
  }
  
  if (keyIsDown(DOWN_ARROW))  { MoveY += 5; }
  if (keyIsDown(UP_ARROW))    { MoveY -= 5; }
  if (keyIsDown(RIGHT_ARROW)) { MoveX += 5; }
  if (keyIsDown(LEFT_ARROW))  { MoveX -= 5; }
  let MX = constrain(MoveX, height*0.05,  width-height*0.05);
  let MY = constrain(MoveY, height*0.05, height-height*0.05);
  MoveX = MX; MoveY = MY;
}

function Repower() { power = 5400; shotB = true; }

class Attack
{
  constructor(PX, PY, VX, VY)
  {
    this.Px = PX; this.px = PX;
    this.Py = PY; this.py = PY;
    this.vx = VX;
    this.vy = VY;
    this.a = (this.py-this.vy)/(this.px-this.vx);
    this.b =  this.py - (this.a*this.px);
    this.d = false;
  }
  
  move()
  {
    if(dist(this.px, this.py, virusX, virusY) < height*0.1 && !this.d)
    {
      this.d = true; print("shot");
    }
    else if(!this.d)
    {
      fill(50); noStroke(); 
      if(this.Px >= this.vx) 
      { 
        let _y = this.py;
        this.px -= 10;
        this.py = this.a*this.px + this.b;
        if(this.py-_y > 10 || this.py-_y < -10)
        {
          if(this.Py > this.vy) { this.py = _y - 10; this.px = (this.py-this.b)/this.a; }
          if(this.Py < this.vy) { this.py = _y + 10; this.px = (this.py-this.b)/this.a; }
        }
        ellipse(this.px, this.py, height*0.02); 
      }
      if(this.Px <  this.vx) 
      { 
        let _y = this.py;
        this.px += 10;
        this.py = this.a*this.px + this.b;
        if(this.py-_y > 10 || this.py-_y < -10)
        {
          if(this.Py > this.vy) { this.py = _y - 10; this.px = (this.py-this.b)/this.a; }
          if(this.Py < this.vy) { this.py = _y + 10; this.px = (this.py-this.b)/this.a; }
        }
        ellipse(this.px, this.py, height*0.02); 
      }
    }
    if(dist(this.px, this.py, virusX, virusY) < height*0.5 && !this.d)
    {
      if(virusF[5] > 0) { _virusX += virusF[1]*10; _virusY += virusF[2]*10; }
    }
  }
}
