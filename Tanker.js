class Tanker {
    constructor(x, y, angle) {
      var options = {
      isStatic:true
          
      }
      this.body = Bodies.rectangle(x, y, 50, 100, options);
      this.width=100;
      this.height=50;
      this.angle=Matter.Body.setAngle(this.body, angle);
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;                       
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      rect(0, 0, 100, 50);
      pop();
    }
  };