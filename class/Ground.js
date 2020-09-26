class Ground {

  constructor() {
   
    var ground_options = {

      isStatic : true

    }
  this.ground = Bodies.rectangle(0,windowHeight - 30,windowWidth,20,ground_options);
   World.add(world,this.ground);

  }

display() {

  fill("brown");
rect(this.ground.position.x,this.ground.position.y,windowWidth,20);


}



}