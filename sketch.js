const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;

var base, wheel1, wheel2;

var tanker, cover, mouth;

function setup() {
    
    var canvas = createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    var groundOptions ={
        isStatic:true
    }

    ground = Bodies.rectangle(200, 570, 1000, 20, groundOptions);
    World.add(world, ground);

    base = Bodies.rectangle(100, 500, 80, 80, groundOptions);
    World.add(world, base);

    wheel1 = Bodies.circle(65, 540, 25, groundOptions);
    World.add(world, wheel1);

    wheel2 = Bodies.circle(135, 540, 25, groundOptions);
    World.add(world, wheel2);

   tanker = new Tanker(130,430, PI/-6);

    cover = Bodies.circle(100, 450, 35, groundOptions);
    World.add(world, cover);

    mouth = Bodies.circle(180, 402, 35, groundOptions);
    World.add(world, mouth);
    

 

}

function draw() {
    background("black");
    
    Engine.update(engine);

    rectMode(CENTER);
    fill("yellow");
    ellipse(mouth.position.x, mouth.position.y, 50);

    tanker.display();

    rectMode(CENTER);
    fill("yellow");
    ellipse(cover.position.x, cover.position.y, 80);

    rectMode(CENTER);
    fill("white");
    rect(ground.position.x, ground.position.y, 1200, 20);

    rectMode(CENTER);
    fill("orange");
    rect(base.position.x, base.position.y, 80, 80);

    rectMode(CENTER);
    fill("yellow");
    ellipse(wheel1.position.x, wheel1.position.y, 40);

    rectMode(CENTER);
    fill("yellow");
    ellipse(wheel2.position.x, wheel2.position.y, 40);

}


