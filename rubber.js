class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1.0
      }
      
      this.r = r;
      this.x = x;
      this.y = y;
      this.body= Bodies.circle(this.x,this.y,(this.r-20)/2,options)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
     elipse(0, 0, this.r);
      pop();
    }
  };
