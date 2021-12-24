let myCanvas;
let myCanvas2;
var Vid_1;
var Vid_2;
var Vid_3;
var Vid_5;
let Brush1;
let Brush2;
let Brush3;
let Brush4;
let Brush1_Text;
let Brush2_Text;
let Brush3_Text;
let Brush4_Text;
let Vid5;
let Vid5_B1;
let Vid5_B2;
let Vid5_B3;
let Vid5_B4;
let Vid5_Stemp;
let Stemp;
let i_icon;
let Bowl;
let InkStick;

let MP3_music;
let MP3_Iicon;
let MP3_Ink;
let MP3_Water;
let MP3_Stemp;
let MP3_Momo;
let MP3_ChooseBrush;

let Step;
let time;
let stop;
let angle;
let Magn; //物件縮放倍率
let MouseClick;
let ObjectFollow;
let easing;
let brush_alpha = 100;

let MouC = 0;      // Step3用來紀錄滑鼠所在象限
let _angle = 0;    // Step3用來紀錄磨墨進度條
let _size = 0;     // Step3用來放大圓圈的
let _alpha = 1;    // Step4用來影片淡入
let _Brush = 0;    // Step4用來選筆的變數
let _draw = false; // Step5準備畫布
let _Over = false; // Step4用來控制只播放一次選筆音效

let i_Button;
let whitebubble;
let brush_1;
let particles = [];
let MainAlpha = 10;
/*
var sketch2 = function(sketch)
{
  var S2_alpha = 0;
  sketch.setup = function()
  {
    sketch.createCanvas(windowWidth,windowWidth/16*9);
  }
  sketch.draw = function()
  {
    sketch.background(255, 0, 0, 255* S2_alpha);
    if(S2_alpha<=1) { S2_alpha+=0.01; }
  }
}
*/
function preload() 
{
  Vid_1 = createVideo('Video/1..mp4'); 
  Vid_2 = createVideo('Video/2..mp4'); Vid_2.hide();
  Vid_3 = createVideo('Video/3..mp4'); Vid_3.hide();
  Vid_5 = createVideo('Video/5..mp4'); Vid_5.hide();
  Brush1 = loadImage('Object/Brush1.png');
  Brush2 = loadImage('Object/Brush2.png');
  Brush3 = loadImage('Object/Brush3.png');
  Brush4 = loadImage('Object/Brush4.png');
  Brush1_Text = loadImage('Object/Brush1_Text.png');
  Brush2_Text = loadImage('Object/Brush2_Text.png');
  Brush3_Text = loadImage('Object/Brush3_Text.png');
  Brush4_Text = loadImage('Object/Brush4_Text.png');
  Vid5 = loadImage('Object/Vid5.png');
  Vid5_B1 = loadImage('Object/Vid5_B1.png');
  Vid5_B2 = loadImage('Object/Vid5_B2.png');
  Vid5_B3 = loadImage('Object/Vid5_B3.png');
  Vid5_B4 = loadImage('Object/Vid5_B4.png');
  Vid5_Stemp = loadImage('Object/Vid5_Stemp.png');
  Stemp = loadImage('Object/Stemp.png');
  i_icon = loadImage('Object/i.png');
  Bowl = loadImage('Object/Bowl.png');
  InkStick = loadImage('Object/InkStick.png');
  MP3_music = loadSound('Music/MP3_music.mp3');
  MP3_Iicon = loadSound('Music/MP3_Iicon.mp3');
  MP3_Ink = loadSound('Music/MP3_Ink.mp3');
  MP3_Water = loadSound('Music/MP3_Water.mp3');
  MP3_Stemp = loadSound('Music/MP3_Stemp.mp3');
  MP3_Momo = loadSound('Music/MP3_Momo.mp3');
  MP3_ChooseBrush = loadSound('Music/MP3_ChooseBrush.mp3');
}

function setup() 
{
  myCanvas = createCanvas(windowWidth,windowWidth/16*9);
  if(windowHeight>=windowWidth){ myCanvas.position(windowWidth/2 - width/2,windowHeight/2 - height/2); } else{ myCanvas.position(windowWidth/2 - width/2, 0); }
  Step = 0;
  time = 0;
  angle = 0;
  easing = 0.05;
  MouseClick = false;
  ObjectFollow = false;
  /*
  button = createButton("click to allow access to sensors");
  button.style('font-size','14pt');
  button.center();
  button.mousePressed(testS2);
  */
  /*
  button = createButton("click to allow access to sensors");
  button.style('font-size','14pt');
  button.position(0, 0);
  */
  print("windowWidth : "+windowWidth + ", windowWidth/ : "+windowWidth/16*9);
}

function mousePressed() 
{
  if(Step == 0)
  {
    let fs = fullscreen();
    fullscreen(!fs);
    resizeCanvas(windowWidth,windowWidth/16*9);
    Vid_1.hide();
    Vid_1.play();
    Vid_1.onended(end);
    MP3_music.loop();
    Step++;
  }
  if(Step == 2 && dist(567* Magn, 696* Magn, mouseX, mouseY) <= 200* Magn)
  {
    ObjectFollow = true;
    cursor('default');
  }
  if(Step == 3 && ObjectFollow)
  {
    MP3_Momo.loop();
  }
  if(Step == 5 && _Brush == 3 && brush_alpha>50)
  {
    for (let i = 0; i < 10; i++)
    {
      var InkObject;
      let paintX = mouseX + random(-50,50);
      let paintY = mouseY + random(-200,200) - 150;
      let RanSize = random(1,15);
      
      fill(0,random(0,150));
      noStroke();

      if(paintX>=260* Magn && paintX<=1400* Magn && paintY>=320* Magn && paintY<=1040* Magn)
      {
        ellipse(paintX, paintY, RanSize, RanSize);
        for(let j=0; j<random(1,5); j++)
        {
          let Ran = random(-5,5);
          ellipse(paintX-random(-5,5), paintY-random(-5,5), RanSize-Ran, RanSize-Ran);
        }
      }
    }
    fill(0);
    for (let i = 0; i < 3; i++)
    {
      let paintX = mouseX + random(-100,100);
      let paintY = mouseY + random(-200,200) - 150;
      let RanSize = random(1,10);
      drawingContext.shadowBlur = 0;

      if(paintX>=260* Magn && paintX<=1400* Magn && paintY>=320* Magn && paintY<=1040* Magn)
      {
        if(dist(mouseX, mouseY, paintX, paintY)<200)
        {
          //point(paintX, paintY);
          ellipse(paintX, paintY, RanSize, RanSize);
          for(let j=0; j<10; j=j+0.1)
          {
            ellipse(paintX, paintY-j*random(1,5), RanSize-j, RanSize-j);
            ellipse(paintX, paintY+j*random(1,5), RanSize-j, RanSize-j);
          }
        }
      }
    }
    brush_alpha -= 10;
  }
  if(Step == 5)
  {
    if(mouseX<=100 && mouseY<=100) { MP3_Iicon.play(); }
  }
}

function mouseReleased() 
{
  if(Step == 2 && dist(1148* Magn, 551* Magn, mouseX, mouseY) <= 150* Magn)
  {
    ObjectFollow = false;
    cursor('default');
    MP3_Water.play();
    MP3_Water.onended(end);
  }
  if(Step == 3 && dist(1402* Magn, 678* Magn, mouseX, mouseY) <= 150* Magn )
  {
    ObjectFollow = true;
    cursor('none');
  }
  if(Step == 3 && ObjectFollow)
  {
    MP3_Momo.stop();
  }
  if(Step == 4)
  {
    if(_Brush!=0) Vid_3.pause();
    if(mouseX>= 715* Magn && mouseX<= 792* Magn) { _Brush = 1; }
    else if(mouseX>= 853* Magn && mouseX<= 957* Magn) { _Brush = 2; }
    else if(mouseX>=1008* Magn && mouseX<=1101* Magn) { _Brush = 3; }
    else if(mouseX>=1158* Magn && mouseX<=1254* Magn) { _Brush = 4; }
    else {  }
    cursor('default');
    _alpha = 1;
    if(_Brush!=0) Step++;
  }
  print("MouseX : "+mouseX + ", MouseY : "+mouseY);
  if(Step == 5)
  {
    if(mouseX>=605 && mouseX<=815 && mouseY<=260) { brush_alpha = 100; MainAlpha = 10; MP3_Ink.play(); }
    else if(mouseX>=1560 && mouseX<=1610 && mouseY<=120 && _Brush != 4 ) { _Brush = 4; image(Vid5_B4,0,0,windowWidth,280* Magn); brush_alpha = 100; }
    else if(mouseX>=1485 && mouseX<=1535 && mouseY<=100 && _Brush != 3 ) { _Brush = 3; image(Vid5_B3,0,0,windowWidth,280* Magn); brush_alpha = 100; }
    else if(mouseX>=1375 && mouseX<=1425 && mouseY<=100 && _Brush != 2 ) { _Brush = 2; image(Vid5_B2,0,0,windowWidth,280* Magn); brush_alpha = 100; }
    else if(mouseX>=1275 && mouseX<=1325 && mouseY<=100 && _Brush != 1 && _Brush != 2 ) { _Brush = 1; image(Vid5_B1,0,0,windowWidth,280* Magn); brush_alpha = 100; }
    else if(mouseX>=1300 && mouseX<=1350 && mouseY<=100 && _Brush != 1 && _Brush == 2 ) { _Brush = 1; image(Vid5_B1,0,0,windowWidth,280* Magn); brush_alpha = 100; }
    else if(mouseX>=1765 && mouseX<=1865 && mouseY>=730 && mouseY<=940) { image(Vid5_Stemp,1920-250,0,250* Magn, windowHeight); Step++; cursor('default'); }
    else { cursor('default'); }
  }
}

function draw() 
{
  //resizeCanvas(windowWidth,windowWidth/16*9);
  //if(windowHeight>=windowWidth){ myCanvas.position(windowWidth/2 - width/2,windowHeight/2 - height/2); } else{ myCanvas.position(windowWidth/2 - width/2, 0); }
  //Magn = windowWidth/ 1920;
  Magn = width/ 1920;
  if(frameCount%60==0 && !stop)
  {
    time++;  
  }
  
  if(Step == 1) // 開頭影片
  {
    imageMode(CORNER);
    image(Vid_1,0,0,windowWidth,windowWidth/16*9);
  }
  if(Step == 2) // 小碟子倒水
  {
    imageMode(CORNER);
    image(Vid_2,0,0,windowWidth,windowWidth/16*9);
    
    if(time == 6) { stop = true; Vid_2.pause(); }

    if(ObjectFollow)
    {
      Vid_2.time(7); 

      for(let i=1; i<=dist(1148* Magn, 551* Magn, mouseX, mouseY)/20-1; i++)
      {
        noStroke();
        fill(255, 200);
        let n = dist(1148* Magn, 551* Magn, mouseX, mouseY)/20;
        let vx = 1148* Magn - mouseX;
        let vy = 551* Magn - mouseY;
        ellipse(mouseX+ vx/ n *i, mouseY+vy/ n *i, 10);
      }

      let tr = atan2(mouseY - 551* Magn, mouseX - 1148* Magn);
      push();
      noStroke();
      fill(255, 200);
      translate(1148* Magn, 551* Magn);
      rotate(tr-1.5);
      triangle(0, 0, 0-10, 0+20, 0+10, 0+20);
      pop();

      imageMode(CENTER);
      image(Bowl,mouseX,mouseY,608* Magn,529* Magn);
      if(dist(1148* Magn, 551* Magn, mouseX, mouseY) <= 150* Magn ) { cursor('pointer'); } else { cursor('none'); }
    }
    else
    {
      if (MP3_Water.isPlaying()) { } 
      else 
      {
        whitebubble.diffuse();
        if(dist(567* Magn, 696* Magn, mouseX, mouseY) <= 200* Magn ) { cursor('pointer'); } else { cursor('default'); }
      }
    }
    blackout();
  }
  if(Step == 3) // 墨條磨墨
  {
    imageMode(CORNER);
    image(Vid_2,0,0,windowWidth,windowWidth/16*9);
    if(time == 17) { stop = true; Vid_2.pause(); }
    if(ObjectFollow)
    {
      if(_angle<angle) _angle += (angle-_angle)*0.01;
      stroke(255, 50*_size);
      strokeWeight(50*_size);
      noFill();
      ellipse(width/2, height*0.45, height*0.6*_size);
      stroke(255*_size);
      strokeWeight(50*_size);
      arc(width/2, height*0.45, height*0.6*_size, height*0.6*_size, 0, _angle);

      noStroke();
      fill(255, 255*_size);
      ellipse(width/2 + height*0.3*cos(_angle)*_size, height*0.45 + height*0.3*sin(_angle), 50*_size);
      for(let i = -1.5; i<=4; i+=0.15){ ellipse(width/2 + height*0.22*cos(i)*_size, height*0.45 + height*0.22*sin(i)*_size, 10); }

      push();
      translate(width/2-10, height*0.45 - height*0.22*_size);
      rotate(PI*3.5);
      triangle(0, 0, 0-10, 0+20, 0+10, 0+20);
      pop();

      imageMode(CENTER);
      if(_angle<6) { image(InkStick,mouseX,mouseY,1364/5* Magn,968/5* Magn); } else { cursor('default'); }
      if(_size<=1) { _size+=0.02; }

      if(_angle>=0.3 && _angle<3) { Vid_2.pause().time(20); time = 20; }
      if(_angle>=3   && _angle<6) { Vid_2.pause().time(25); time = 25; }
      if(_angle>=6   && _size> 0) { _size-=0.06; }
      if(_angle>=6   && _size<=0) 
      { 
        MP3_Momo.stop();
        Vid_2.play(); 
        stop = false;
        Vid_2.onended(end);
      }
    }
    else
    {
      if(time >= 16) whitebubble.diffuse();
      if(dist(1402* Magn, 678* Magn, mouseX, mouseY) <= 150* Magn ) { cursor('pointer'); } else { cursor('default'); }
    }
  }
  if(Step == 4)
  {
    background(0);
    imageMode(CORNER);
    image(Vid_3,0,0,windowWidth,windowWidth/16*9);
    blackout();
    if(ObjectFollow)
    {
      //image(Brush1, mouseX, 0, 190* Magn* 1.2, windowWidth/16*9* 1.2);
      if(mouseX>= 715* Magn && mouseX<= 792* Magn) { imageMode(CENTER); image(Brush1_Text, width*0.1, height*0.5, 503* Magn/2, 851* Magn/2); cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
      else if(mouseX>= 853* Magn && mouseX<= 957* Magn) { imageMode(CENTER); image(Brush2_Text, width*0.1, height*0.5, 503* Magn/2, 851* Magn/2); cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
      else if(mouseX>=1008* Magn && mouseX<=1101* Magn) { imageMode(CENTER); image(Brush3_Text, width*0.1, height*0.5, 503* Magn/2, 851* Magn/2); cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
      else if(mouseX>=1158* Magn && mouseX<=1254* Magn) { imageMode(CENTER); image(Brush4_Text, width*0.1, height*0.5, 503* Magn/2, 851* Magn/2); cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
      else { cursor('default'); _Over = false; }
    }
  }
  if(Step == 5)
  {
    if(!_draw)
    {
      imageMode(CORNER);
      image(Vid5,0,0,windowWidth,windowWidth/16*9);
      
      button = createButton("");
      button.position(0, 0);

      brush_1 = new China_Ink_Brush_1();
      whitebubble = new WhiteBubble(788* Magn, 235* Magn, 50);
      _draw = true;
    }
    if(brush_alpha == 0)
    {
      WhiteBubble.diffuse();
    }
    if(mouseX>=260* Magn && mouseX<=1400* Magn && mouseY>=320* Magn && mouseY<=1040* Magn)
    {
      if(_Brush == 1)
      {
        imageMode(CORNER);
        image(Vid5_B1, 0, 0, width, 280* Magn);
        fill(0);
        stroke(0);
        brush_1.draw();
      }
      else if(_Brush == 2)
      {
        imageMode(CORNER);
        image(Vid5_B2, 0, 0, width, 280* Magn);
      }
      else if(_Brush == 3)
      {
        imageMode(CORNER);
        image(Vid5_B3, 0, 0, width, 280* Magn);
      }
      else if(_Brush == 4)
      {
        imageMode(CORNER);
        image(Vid5_B4, 0, 0, width, 280* Magn);
        if(mouseIsPressed)
        {
          for (let i = 0; i < 20; i++) 
          {
            let p = new Particle();
            particles.push(p);
          }
          for (let i = particles.length - 1; i >= 0; i--) 
          {
            particles[i].update();
            particles[i].show1();
            if (particles[i].finish()) 
            {
              particles.splice(i, 1);
            }
          }
          MainAlpha-=0.025;
        }
        else
        {
          for (let i = 0; i < 2; i++) 
          {
            //let p = new Particle();
            //particles.push(p);
          }
          for (let i = particles.length - 1; i >= 0; i--) 
          {
            particles[i].update();
            particles[i].show();
            if (particles[i].finish()) 
            {
              particles.splice(i, 1);
            }
          }
          
        }
      }
    }
    if(mouseX>=605 && mouseX<=815 && mouseY<=260) { cursor('pointer'); }
    else if(mouseX>=1560 && mouseX<=1610 && mouseY<=120 && _Brush != 4 ) { cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
    else if(mouseX>=1485 && mouseX<=1535 && mouseY<=100 && _Brush != 3 ) { cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
    else if(mouseX>=1375 && mouseX<=1425 && mouseY<=100 && _Brush != 2 ) { cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
    else if(mouseX>=1275 && mouseX<=1325 && mouseY<=100 && _Brush != 1 && _Brush != 2 ) { cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
    else if(mouseX>=1300 && mouseX<=1350 && mouseY<=100 && _Brush != 1 && _Brush == 2 ) { cursor('pointer'); if(!_Over) { MP3_ChooseBrush.play(); _Over = true; } }
    else if(mouseX>=1765 && mouseX<=1865 && mouseY>=730 && mouseY<=940) { cursor('pointer'); }
    else { cursor('default'); _Over = false; }
  }
  if(Step == 6)
  {

  }

  if (mouseIsPressed) 
  {
    MouseClick = true;
    if(Step == 2 && time == 6) whitebubble.OnClick();
    if(Step == 3)
    {
      if(MouC == 0)
      {
        if(mouseX>width/2 && mouseY<height/2) MouC = 1;
        if(mouseX>width/2 && mouseY>height/2) MouC = 4;
        if(mouseX<width/2 && mouseY>height/2) MouC = 3;
        if(mouseX<width/2 && mouseY<height/2) MouC = 2;
      }
      else
      {
        if(mouseX>width/2 && mouseY<height/2) 
        { 
          if(MouC==4) angle += 0.5;
          if(MouC==4 || MouC==1) {MouC = 1;} else { MouC = 5; } 
        }
        if(mouseX>width/2 && mouseY>height/2) { if(MouC==3 || MouC==4){MouC = 4;} else{ MouC = 5; } }
        if(mouseX<width/2 && mouseY>height/2) { if(MouC==2 || MouC==3){MouC = 3;} else{ MouC = 5; } }
        if(mouseX<width/2 && mouseY<height/2) { if(MouC==1 || MouC==2){MouC = 2;} else{ MouC = 5; } }
      }
      /*
      fill(0);
      textSize(32);
      text(_angle,width/2,200);
      */
    }
  }
  else
  {
    MouseClick = false;
    if(Step == 3) MouC = 0;
  }
  /*
  fill(0);
  textSize(32);
  text(time,width/2,100);
  */
}

function end()
{
  if(Step == 4)
  {
    ObjectFollow = true;
  }
  if(Step == 3)
  {
    Vid_3.play();
    Vid_3.onended(end);
    _alpha = 1;
    ObjectFollow = false;
    Step++;
  }
  if(Step == 2)
  {
    Vid_2.play().time(13);
    whitebubble = new WhiteBubble(1351* Magn, 755* Magn, 50);
    time = 13;
    stop = false;
    Step++;
  }
  if(Step == 1)
  {
    Vid_2.play();
    whitebubble = new WhiteBubble(width*0.3453, height*0.7138, 50);
    time = 0;
    Step++;
    print("time_end() : "+time);
  }
}

function blackout()
{
  if(_alpha <= 1) { _alpha-=0.04;}
  fill(0, 255*_alpha);
  rect(0, 0, width, height);
}
/*
function testS2()
{
  var myp5_1 = new p5(sketch2, 'p5sketch');
}
*/
function keyReleased()
{
  if (MP3_music.isPlaying()) 
  {
    MP3_music.stop();
  } 
  else 
  {
    MP3_music.play();
  }
}

class WhiteBubble
{
  constructor(x, y, s)
  {
    this.x = x;
    this.y = y;
    this.s = s;
    this.a = 100;
    this.sd = s;
    this.bl = 1;
  }

  diffuse()
  {
    noStroke();
    fill(255, 225);
    ellipse(this.x, this.y, this.s);
    fill(255, this.a);
    ellipse(this.x, this.y, this.sd);
    
    this.s  += this.bl *  0.2;
    this.sd += this.bl *  1;
    this.a  += this.bl * -2;
    if(this.sd >= 100) this.bl = -1;
    if(this.sd <= this.s+10) this.bl = 1;
    if(dist(this.x, this.y, mouseX, mouseY) <= 25) { cursor('pointer'); } else { cursor('default'); }
  }

  OnClick()
  {
    if(dist(this.x, this.y, mouseX, mouseY) <= 50 && MouseClick) 
    {
      noStroke();
      fill(200, 200);
      ellipse(this.x, this.y, this.s);
    }
  }
}

class China_Ink_Brush_1
{
  constructor()
  {
    this.distance = 10;
    this.spring = 0.5;
    this.friction = 0.5;
    this.size = 10;
    this.diff = this.size/8;
    this.x = this.y = this.ax = this.ay = this.a = this.r = this.f = 0;
  }

  draw()
  {
    this.oldR = this.r;
    if(mouseIsPressed) 
    {
      this.mX = mouseX;
      this.mY = mouseY;
      if(!this.f) 
      {
        this.f = 1;
        this.x = this.mX;
        this.y = this.mY;
      }
      this.ax += ( this.mX - this.x ) * this.spring;
      this.ay += ( this.mY - this.y ) * this.spring;
      this.ax *= this.friction;
      this.ay *= this.friction;
      this.a += sqrt( this.ax*this.ax + this.ay*this.ay ) - this.a;
      this.a *= 0.6;
      this.r = this.size - this.a;
      
      stroke(0, brush_alpha);
      
      for( let i = 0; i < this.distance; ++i ) 
      {
        this.oldX = this.x;
        this.oldY = this.y;
        this.x += this.ax / this.distance;
        this.y += this.ay / this.distance;
        this.oldR += ( this.r - this.oldR ) / this.distance;
        if(this.oldR < 1) this.oldR = 1;
        strokeWeight( this.oldR+this.diff );
        line( this.x, this.y, this.oldX, this.oldY );
        strokeWeight( this.oldR );
        line( this.x+this.diff*2, this.y+this.diff*2, this.oldX+this.diff*2, this.oldY+this.diff*2 );
        line( this.x-this.diff, this.y-this.diff, this.oldX-this.diff, this.oldY-this.diff );
      }
      
      brush_alpha = brush_alpha - 0.2;
    } 
    else if(this.f) 
    {
      this.ax = this.ay = this.f = 0;
    }
  }
}

class Particle 
{
  constructor() 
  {
    this.x = mouseX;
    this.y = mouseY;
    this.yd = mouseY;
    this.vx = random(-1,1);
    this.vy = random(-1,3);
    this.d = random(15, 35);
    this.acc = 0.1;
    this.alpha = MainAlpha;
    
    this.Fd = this.d;
  }

  update() 
  {
    this.vy = this.vy - this.acc;
    this.x += this.vx;
    this.y += this.vy;
    this.yd -= this.vy;
    this.d += 0.1;
    this.alpha -= 0.25;
  }

  finish() 
  {
    return this.alpha < 0;
  }

  show() 
  {
    noStroke();
    fill(0,this.alpha);
    circle(this.x+random(-1,1), this.y, this.d+random(1,20))
    circle(this.x+random(-1,1), this.yd, this.d+random(1,20))
    circle(this.x+random(-1,1), this.y, this.d+random(1,20))
    circle(this.x+random(-1,1), this.yd, this.d+random(1,20))
    
    this.Fd--
    circle(mouseX, mouseY, this.Fd)
    circle(mouseX+random(-10,10), mouseY+random(-10,10), this.Fd+random(1,20))
    circle(mouseX+random(-10,10), mouseY+random(-10,10), this.Fd+random(1,20))
  }
  
  show1()
  {
    noStroke();
    fill(0,this.alpha);
    circle(this.x+random(-1,1), this.y, this.d)
    circle(this.x+random(-1,1), this.yd, this.d)
    this.Fd = this.d
  }

}