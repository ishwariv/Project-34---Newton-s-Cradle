const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var mConstraint;
var p1,p2,p3,p4,p5;
var sling1,sling2,sling3,sling4,sling5;
var bg;

function preload(){
    bg=loadImage("sprites/bg.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth/1.5,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
    mouse: canvasmouse
  };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    p1 = new Pendulum(350, 350, "#00e0ff");
    p2 = new Pendulum(410, 350, "#e91e63");
    p3 = new Pendulum(470, 350, "#fec107");
    p4 = new Pendulum(530, 350, "#e91e63");
    p5 = new Pendulum(590, 350, "#00e0ff");

    sling1 = new Sling(p1.body, { x: 350, y: 100 });
    sling2 = new Sling(p2.body, { x: 410, y: 100 });
    sling3 = new Sling(p3.body, { x: 470, y: 100 });
    sling4 = new Sling(p4.body, { x: 530, y: 100 });
    sling5 = new Sling(p5.body, { x: 590, y: 100 });
}
function draw(){
    background(bg);

    //Instructions
    textSize(25);
    fill("white");
    textFont('georgia');
    text("Move the Pendulums and Watch the Magic!",230,50);


    Engine.update(engine);
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(p1.body, { x: mouseX, y: mouseY });
  }