class Box {
  constructor(x, y, width, height,color) {
    var options = {
        
        density:1.5,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color=color;
    this.visibility=255;
    
   // this.X=x;
    //this.Y=y;
    
    World.add(world, this.body);

    
  }

  score(){

      if(this.visibility<0 && this.visibility>-1005){score++}
      

  }
  


  display(){
    var p=this.body.position ;
    push ();
    if(this.body.speed<=3){
    rectMode(CENTER);
    fill (this.color)
    rect(p.x,p.y,  this.width, this.height);
    console.log("Speed<3");
    }

    else{
      console.log("Speed>3");
        World.remove(world,this.body);
        this.visibility = this.visibility-5;
        tint (255,this.visibility);
      
    }
    
    pop ();
    
    console.log(this.body.speed);
  }

};


