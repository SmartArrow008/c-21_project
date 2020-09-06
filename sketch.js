var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune
var sunImage,mercuryImage,venusImage,earthImage,marsImage,jupiterImage,saturnImage,uranusImage,neptuneImage

function preload()
{
  sunImage = loadImage("sun.jpg");
  mercuryImage = loadImage("mercury.jpg");
  venusImage = loadImage("venus.jpg");
  earthImage = loadImage("earth.jpg");
  marsImage = loadImage("mars.jpg");
  jupiterImage = loadImage("jupiter.jpg");
  saturnImage = loadImage("saturn.jpg");
  uranusImage = loadImage("uranus.jpg");
  neptuneImage = loadImage("neptune.jpg");
}
function setup() {
  createCanvas(1200, 800);
  
  sun = createSprite(10,10,200,200);
  sun.addImage(sunImage);
  sun.setCollider("circle",0,0,85);
  sun.debug = true;
  mercury = createSprite(200,100,20,20);
  mercury.addImage(mercuryImage);
  mercury.setCollider("circle",0,0,85);
  mercury.debug = true;
  venus = createSprite(250,200,30,30);
  venus.addImage(venusImage);
  sun.setCollider("circle",0,0,85);
  sun.debug = true;
  earth = createSprite(350,250,40,40);
  earth.addImage(earthImage);
  mars = createSprite(450,350,35,35);
  mars.addImage(marsImage);
  jupiter = createSprite(550,450,60,60);
  jupiter.addImage(jupiterImage);
  saturn = createSprite(650,550,55,55);
  saturn.addImage(saturnImage);
  uranus = createSprite(750,650,50,50);
  uranus.addImage(uranusImage);
  neptune = createSprite(850,750,52,52);
  neptune.addImage(neptuneImage);

}
function draw() {
  background(255);
  if(frameCount%50 ===0){
    sun.scale = sun.scale+0.1;
    
  }
  if(sun.collide(mercury)){
    mercury.destroy();
  }
  if(sun.collide(venus)){
    venus.destroy();
  }
  if(sun.collide(earth)){
    earth.destroy();
  }
  if(sun.collide(mars)){
    mars.destroy();
  }
  if(sun.collide(jupiter)){
    jupiter.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
    neptune.destroy();
  }
  
  drawSprites()
; 
}