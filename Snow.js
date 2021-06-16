class Snow{
    constructor(x,y){
        this.snowImage = loadImage("snow4.webp");
        this.trajectory = [];
    }
    display(){

          if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
          for(var i=0; i<this.trajectory.length; i++){
            image(this.snowImage, this.trajectory[i][0], this.trajectory[i][1]);
          }
    }
}