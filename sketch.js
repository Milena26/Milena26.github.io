var size; 
var color = [];
function setup() {

createCanvas( window.innerWidth,window.innerHeight);
size = 100;
color[0] = color(255,120,120);
color[1] = color(232,12,122);
color[2] = color(30,255,239);
color[3] = color(255,0,133);
color[4] = color(169,13,255);


}

function draw() {
	//background(255);
	size =random(100);
	fill(255,3);
	rect(0,0,width,height);


	if (mouseIsPressed) {
		fill(color[parseInt(random(5))]);
	}else fill(255);
  ellipse(mouseX,mouseY,size,size);
  ellipse(width-mouseX,mouseY,size,size);
  ellipse(width-height-mouseY,size,size);
  ellipse(width-mouseX,height-mouseY,size,size);

}