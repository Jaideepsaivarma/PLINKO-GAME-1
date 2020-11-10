class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          
      }
      this.body = Bodies.circle(x,y,5,options);
     // this.color = (random(0,255),random(0,255),random(0,255));
      this.width = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.width);
    }
  };
