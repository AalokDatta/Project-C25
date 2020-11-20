class Box{

    constructor(x,y,width,height){
       var options={
          isStatic: true
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.image = loadImage("dustbingreen.png");
       World.add(world, this.body);
  
    
    }
    display(){
      imageMode(CENTER);
      fill("green");
      image(this.image,700,630,200,250);
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
  
      }
    }