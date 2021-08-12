var ship1;
var ship1Img;
var sea;
var seaImg;

function preload(){
var ship1Img=loadImage("ship-1.png");
var seaImg=loadAnimation("sea.png");
}

var END =1;
var PLAY =1;
var gameState = PLAY;


function setup(){
  createCanvas(600,400);

  var sea= createCanvas(300,200)
  var sea = setAnimation(seaImg);
  seaImg.velocityX

 var ship1 = createSprite(50,100);
 ship1.setImage("ship1Img");
  ship1.scale=0.5
  if (spacekey) 
   ship1.velocityY
}
function draw() {
  background("skyblue");
if (gameState===PLAY) {
  sea.addAnimation(seaImg); 
  ship1.addImage(ship1Img);        
}
     gameState===END
   //code to reset the background
   if (sea.x < 0) {
    sea.x = sea.width/2;
   }