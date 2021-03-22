class Rope{
    constructor(b1,b2,o1,o2){
        var options={
            bodyA:b1,
            bodyB:b2,
            pointB:{x:o1,y:o2}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
        this.o1=o1
        this.o2=o2
    }
    display(){
        stroke("white")
        var p1=this.rope.bodyA.position
        var p2=this.rope.bodyB.position
        line(p1.x,p1.y,p2.x+this.o1,p2.y+this.o2)
    }
}