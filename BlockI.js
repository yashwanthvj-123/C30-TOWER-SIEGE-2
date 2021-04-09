
class BlockI extends Base {
    
  constructor (x,y) {

      super(x,y,30,30);
      this.image = loadImage("blue.png");
      this.visiblity=255;

  }

  display () {
      
    if (this.body.speed > 8 ) {

      World.remove (world,this.body);
        
      push ();
        
      this.visiblity=this.visiblity-5;
        
      tint (255,this.visiblity);
        
      image (this.image,this.body.position.x,this.body.position.y,30,30);
        
      pop ();
        
    }

    else {
      
      super.display ();
      
    }

  }

}
