var bubbles = [];


function setup() {
createCanvas(600,400);


}

function draw(){

background(0);

for ( var i=0;i < bubbles.length; i++){
	for (var j=0;j < bubbles.length; j++){
		if(i != j && bubbles[i].intersects(bubbles[j])){
         bubbles[i].speedX = bubbles[i].speedX*-1;
         bubbles[i].speedY = bubbles[i].speedY*-1;
         //bubbles[j].speedX = bubbles[j].speedX *-1;
         //bubbles[j].speedY = bubbles[j].speedY *-1;
         
		}
	 }
	 bubbles[i].move();
	 bubbles[i].display();
   }
 }

function mousePressed(){
	bubbles.push(new Buble(mouseX,mouseY));
}

function Buble(){

this.x = random(0,width);
this.y = random(0,height);
this.r = random(10,20);
this.speedX = random(-2,2);
this.speedY = random(-2,2);


this.display = function(){
    stroke(255);
    fill(255,0,150,50);
    fill(255,0,150,this.lifespan);
	ellipse( this.x,this.y,this.r*2,this.r*2);
 }

 this.move = function(){
   
 	this.x = this.x+this.speedX;
    this.y = this.y+this.speedY;

    if ((this.x > width )||(this.x < 0)){
    	this.speedX = this.speedX * -1;
    }

    if ((this.y > height ) || (this.y < 0)){
    	this.speedY = this.speedY * -1;
    }
 }
 this.intersects = function(other) {
 	var d = dist(this.x, this.y, other.x, other.y)
 	if (d < this.r + other.r){
 		return true;
 	}else{
 		return  false;
 	}
 }
}

/**function convertidor(cent) {
var pesos = dollars * 3000;
return pesos;
var farh = (9/5*cent)+32;
return farh;

}

function draw() {
 /**var temp = 30;
 var temp2 = convertidor(temp);

console.log("la temperatura en farenheit es: " + temp2);
 /**var temp = 40;
 var dolares;
 var resultado = convertidor(dolares);
}**/
