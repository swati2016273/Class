class Log {

constructor () {
var options = {

    isStatic : true
}
this.log2 = Bodies.rectangle(windowWidth-450,windowHeight-500,100,20,options);
this.log1 = Bodies.rectangle(windowWidth-400,windowHeight-520,100,20,options);
this.log3 = Bodies.rectangle(windowWidth-620,windowHeight - 200,400,20,options);
this.log4 = Bodies.rectangle(windowWidth-620,windowHeight - 350,400,20,options);

Matter.Body.setAngle(this.log1,PI/4);
Matter.Body.setAngle(this.log2,3*(PI/4));

World.add(world,this.log1);
World.add(world,this.log2);
World.add(world,this.log3);
World.add(world,this.log4);
}
display (){

    fill("yellow");
    strokeWeight(3);
    stroke("orange");

    push();
    var pos1 = this.log1.position;
    translate(pos1.x,pos1.y);
    rotate(this.log1.angle);
    rect(0,0,200,20);
    pop();


    push();
    var pos2 = this.log2.position;
    translate(pos2.x,pos2.y);
    rotate(this.log2.angle);
    rect(0,0,200,20);
    pop();

    push();
    var pos3 = this.log3.position;
    translate(pos3.x,pos3.y);
    rotate(this.log3.angle);
    rect(0,0,400,20);
    pop();

    push();
    var pos4 = this.log4.position;
    translate(pos4.x,pos4.y);
    rotate(this.log4.angle);
    rect(0,0,400,20);
    pop();

}





}