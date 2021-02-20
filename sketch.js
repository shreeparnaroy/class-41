

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars
var c1,c2,c3,c4,tr
function preload(){

c1=loadImage("images/car1.png")
c2=loadImage("images/car2.png")
c3=loadImage("images/car3.png")
c4=loadImage("images/car4.png")
tr=loadImage("images/track.jpg")
//c1=loadImage("images/car1.png")
}





function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

  //connection
  database = firebase.database();
  
  //new game object
  game = new Game();
  game.getState();//get the gamestate from db
  game.start();
}


function draw(){
  if(playerCount === 4){ //checking
    game.update(1);//change gameState from 0 to 1
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end
  }
}
