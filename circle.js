class Circle{
    constructor(x, y, r) 
    {
        var options = {
            restitution:0.4,
            friction:0.4,
            isStatic:false
        }
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
      }
      display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
      }
    }
