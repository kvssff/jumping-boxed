var canvas;
var music;
var s1,s2,s3,s4;
var edges
var box;;
var edges;
function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    
    canvas = createCanvas(800,800);
    music.play();
    s1=createSprite(50,790,100,50);
    s1.shapeColor="orange";
      s2=createSprite(200,790,100,50);
      s2.shapeColor="blue"
    s3=createSprite(400,790,100,50);
    s3.shapeColor="white";
    s4=createSprite(600,790,100,50);
    s4.shapeColor="pink";
    box=createSprite(20,755,20,20);
    box.shapeColor="green"  
    box.bounceOff(s1);
  box.velocityX=4;
}
function draw() {
    background("black")
  box.bounceOff(s1);
    box.bounceOff(s2);
 box.bounceOff(s3);
  box.bounceOff(s4);   
  box.bounceOff(edges);  
    
//create edgeSprite
//add condition to check if box touching surface and make it box
if(box.bounceOff(s1)&&box.isTouching(s1)){
box.shapeColor="orange";      
}
else if(box.bounceOff(s2)&&box.isTouching(s2)){
s2.shapeColor="blue";    
}
else if(box.bounceOff(s3)&&box.isTouching(s3)){
 box.shapeColor="white";   
}
else if(box.bounceOff(s4)&&box.isTouching(s4)){
box.shapeColor="pink";    
music.stop();
}
edges=createEdgeSprites();
drawSprites(); 
}