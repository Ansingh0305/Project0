var bg,bgImg
var player1,player2,ball,player1img,player2img
var ball,ballimg
var ground,groundimg,inground
var goal1,goal1img,goal2,goal2img
var ballstop1,ballstop2,ballstop3,ballstop4
var score1=0,score2=0
var powerup,counter=150,powerup2,powerupimg,powerup2img
var timer=180, freezeplay,timer2=20;
function preload (){
  bgImg=loadImage("TS-_-stadium-1.jpg")
  player2img=loadImage("ronaldo2.png")
  player1img=loadImage("ronaldo.png")
  ballimg=loadImage("ball.png")
  powerup2img=loadImage("slow.png")
  powerupimg=loadImage("freeze.png")
  groundimg=loadImage("ground.jpg")
  goal1img=loadImage("goal1.png")
  goal2img=loadImage("goal2.png")
  freezeplay=loadImage("freezeplay.png")
}
function setup(){
  createCanvas(1350,625)
bg=createSprite(650,300,1350,625)
bg.addImage(bgImg);
bg.scale=1.5
ground=createSprite(675,600,1400,10)
inground=createSprite(675,615,1400,10)
inground.visible=false;
player1=createSprite(300,500,70,100);
player1.addImage(player1img)
player1.scale=0.8;
player1.setCollider("circle",0,0,100)
player2=createSprite(900,500,70,100);
player2.addImage(player2img)
player2.scale=0.8;
player2.setCollider("circle",0,0,100)
ball=createSprite(650,500,20,20);
ball.addImage(ballimg)
ball.scale=0.12;
ball.setCollider("circle",0,0)
goal1 =createSprite(80,455,30,50)
goal1.addImage(goal1img)
goal1.scale=1.15;
goal2=createSprite(1270,455,30,50)
goal2.addImage(goal2img)
goal2.scale=1.15;
powerup=createSprite(random(500,800),random(250,300),40,40)
powerup.addImage(powerupimg)
powerup.scale=0.35
powerup.setCollider("circle",0,0,50)
powerup2=createSprite(random(500,800),random(250,300),40,40)
powerup2.addImage(powerup2img)
powerup2.scale=0.3
powerup.visible=false;
powerup2.visible=false;
ballstop1=createSprite(15,300,10,10000)
ballstop1.visible=false;
ballstop2=createSprite(1335,300,10,10000)
ballstop2.visible=false;
ballstop3=createSprite(70,300,200,10)
ballstop3.visible=false;
ballstop4=createSprite(1280,300,200,10)
ballstop4.visible=false;

}
function draw(){
background("grey")
createEdgeSprites();
player1.collide(inground)
player2.collide(inground)
player1.collide(ballstop1)
player1.collide(ballstop2)
player2.collide(ballstop1)
player2.collide(ballstop2)
player1.collide(ballstop3)
player1.collide(ballstop4)
player2.collide(ballstop3)
player2.collide(ballstop4)
ball.collide(inground)
ball.bounceOff(ballstop1);
ball.bounceOff(ballstop2);
ball.bounceOff(ballstop3);
ball.bounceOff(ballstop4);
if(frameCount%30===0 && timer>0){
  timer=timer-1;
}
player1.collide(powerup,freezeplay)
/*if(player1.collide(powerup) && powerup.visible===true){

  if(frameCount%20===0 && timer2>0){
    timer2=timer2-1
    console.log(timer2)
  }
if(timer2>0){
  player2.addImage(freezeplay)
  
}
if(timer2===0){
  player2.addImage(player2img)
  console.log("hi")
}
}
if(player2.collide(powerup) && powerup.visible===true){

  if(frameCount%20===0 && timer2>0){
    timer2=timer2-1
    console.log(timer2)
  }
if(timer2>0){
  player1.addImage(freezeplay)
  player1.x=300
  player1.y=500
}
if(timer2===0){
  player1.addImage(player1img)
}
}*/

if(frameCount%10===0){
  counter=counter-1
}
if(counter<=60 && counter>0){
  powerup.visible=true
}
if(counter<=20 && counter>0){
  powerup2.visible=true
}
if(counter===0){
  powerup.visible=false
  powerup2.visible=false
  counter=150
}
if(keyDown(32) ){
  player1.x=300
  player2.x=900
  ball.x=650
  timer=180
  counter=150
  score1=0
  score2=0
}
if(ball.isTouching(player2) && keyWentDown(DOWN_ARROW)){
  ball.velocityY=-20
  ball.velocityX=-5
}
if(ball.isTouching(player1) && keyWentDown(83)){
  ball.velocityY=-20
  ball.velocityX=5
}

if(keyDown(UP_ARROW) && player2.y>=480){
player2.velocityY = -15 ;
}
if(keyDown(87) && player1.y>=480){
  player1.velocityY=-15;
}
if(ball.y>400 && ball.x<100){
  score2=score2+1;
  ball.x=650;
  ball.y=500;
  ball.velocityY=0
  ball.velocityX=0
  player1.x=300
  player1.y=500
  player2.x=900
  player2.y=500
  player2.velocityY=0
  player1.velocityY=0
  player2.velocityX=0
  player1.velocityX=0
}
if(ball.y>400 && ball.x>1250){
  score1=score1+1;
  ball.x=650;
  ball.y=500;
  ball.velocityY=0
  ball.velocityX=0
  player1.x=300
  player1.y=500
  player2.x=900
  player2.y=500
  player2.velocityY=0
  player1.velocityY=0
  player2.velocityX=0
  player1.velocityX=0
}

ball.velocityY=ball.velocityY+0.8
player2.velocityY= player2.velocityY+0.7
player1.velocityY=player1.velocityY+0.7
ball.bounceOff(player2)
ball.bounceOff(player1)
if(keyDown(LEFT_ARROW)){
player2.x=player2.x-9
}
if(keyDown(RIGHT_ARROW)){
  player2.x=player2.x+9
}
if(keyDown(65)){
  player1.x=player1.x-9
  }
  if(keyDown(68)){
    player1.x=player1.x+9
    }
  

drawSprites();

if(timer===0){
  textSize(40)
  fill("green")
  if(score1>score2){
 
    text("Original Ronaldo Wins",550,320)

  }
  else if(score2>score1){
    text("Clone Ronaldo Wins",550,320)
  }
  text("PRESS SPACE TO REPLAY",570,360)
  timer.visible=false;
}
strokeWeight(6)
stroke("white")
line (660,10,660,80) 
textSize(40)
fill ("white")
text(score1,600,50)
text(score2,700,50)
text(timer,1250,50)
  }
  function freezeplay(){
    if(frameCount%20===0 && timer2>0){
      timer2=timer2-1;
      
    }
    if(timer2>0 && timer2<20){
      player2.changeImage(freezeplay);
    }
    if(timer2===0){
      player2.changeImage(player2img)
    }
  }