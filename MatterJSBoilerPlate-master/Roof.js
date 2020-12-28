class Roof {
    constructor (x,y,width,height){
        var options={
            isStatic: true,
            density:1,
            friction:0.8
        }
        this.width=400;
        this.height=30;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(0);
        stroke("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}