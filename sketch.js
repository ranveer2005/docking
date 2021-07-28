var iss,sbg,sc1,sc2,sc3,sc4,sc,iss1,hasDocked = false;

function preload(){
  iss = loadImage("Docking-undocking/iss.png")
  sbg = loadImage("Docking-undocking/spacebg.jpg")
  sc1 = loadImage("Docking-undocking/spacecraft1.png")
  sc2 = loadImage("Docking-undocking/spacecraft2.png")
  sc3 = loadImage("Docking-undocking/spacecraft3.png")
  sc4 = loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  sc = createSprite(700,300, 50, 50);
  sc.addImage(sc1);
  sc.scale = 0.3
  iss1 = createSprite(400, 200, 50, 50);
  iss1.addImage(iss);
  
}

function draw() {
  background(sbg);  
 console.log(sc.x,sc.y)
  if (keyDown("UP_ARROW")){
    
    if (!hasDocked){
      sc.addImage(sc1)
      sc.y = sc.y - random(2,10) 
     }
  }
  if (keyDown("DOWN_ARROW")){
    
    if (!hasDocked){
      sc.addImage(sc2)
      sc.y = sc.y + random(2,10) 
     }
  }
  if (keyDown("RIGHT_ARROW")){
    
    if (!hasDocked){
      sc.x = sc.x + random(2,10) 
      sc.addImage(sc3)
     }
  }
  if (keyDown("LEFT_ARROW")){

    if (!hasDocked){
      sc.x = sc.x - random(2,10) 
      sc.addImage(sc4)
     }
    }
  if (sc.x <= (iss1.x - 65 )  &&  sc.y <= (iss1.y + 90)){
    hasDocked = true;
     
  }
  drawSprites();
  
}