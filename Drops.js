class Umbrella {
    constructor(x,y){
        this.rain = Bodies.circle(x,xy,5,options)
    }
createDrops(){
    var dropPos=this.body.position;	
		push()
		translate(dropPos.x, dropPos.y);
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    
}



}