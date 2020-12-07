class Projectile{
    constructor(x, y, width, height) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.body);
      }

     release(){
        this.body.bodyA=null;  
     }

     display(){
       if(this.body.bodyA){
         var pointA= this.body.bodyA.position;
         var pointB= this.bodyB;

         strokeWeight(1);
         stroke("grey");

        line(pointA.x,pointA.y,pointB.x,pointB.y);
       } 
    }
}