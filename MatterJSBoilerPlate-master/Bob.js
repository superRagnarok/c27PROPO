class Bob {
    constructor (x,y,r){
    var options={
        isStatic:false,
        restitution: 1,
        friction: 1,
        density: 0.5
    }
    this.r=80;
    this.diameter=2*r;
    this.body=Bodies.circle(x,y,r/2,options);
    World.add(world,this.body);
    }
     display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("yellow");
        stroke(0);
        ellipse(0,0,this.r/2,this.r/2);
        pop(); 
     }
}