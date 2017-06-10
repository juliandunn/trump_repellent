var value = 0;
var canvasWidth = 800;
var canvasHeight = 600;

var trump;
var bannon;
var comey;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  trump = createSprite(random(0, canvasWidth), random(0, canvasHeight));
  trump.addImage(loadImage("assets/trump.png"));
  trump.setCollider("circle", 0, 0, (max(trump.width, trump.height) + 100));
  
  bannon = createSprite(random(0, canvasWidth), random(0, canvasHeight));
  bannon.addImage(loadImage("assets/bannon.png"));
  bannon.mouseActive = true;

  comey = createSprite(random(0, canvasWidth), random(0, canvasHeight));
  comey.addImage(loadImage("assets/comey.png"));
  comey.mouseActive = true;
} 

function draw() {
  background(220); // refresh canvas
  if (bannon.mouseIsPressed) {
    print("picked up Bannon")
    bannon.position.x = mouseX;
    bannon.position.y = mouseY;
    // adjust Trump to be far away from Bannon if he's too close
    bannon.displace(trump);
  }

  if (comey.mouseIsPressed) {
    print("picked up Comey");
    comey.position.x = mouseX;
    comey.position.y = mouseY;
    comey.displace(trump);
  }

  // if Trump went off the screen then he just wraps around.
  // he's never gonna go away -- not even after 2020
  if (trump.position.x >= canvasWidth) {
    trump.position.x = 10;
  }
  if (trump.position.x < 0) {
    trump.position.x = canvasWidth - 10;
  }
  if (trump.position.y >= canvasHeight) {
    trump.position.y = 10;
  }
  if (trump.position.y < 0) {
    trump.position.y = canvasHeight - 10;
  }

  // Comey rules; you can't push him around
  bannon.collide(comey);
  drawSprites();
}