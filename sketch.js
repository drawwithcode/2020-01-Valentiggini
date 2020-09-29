function preload(){

}
//The explosive Rose

var k=5/8;


function setup() {
  createCanvas(windowWidth,windowHeight)

}

beginShape();
function draw() {


    background('#24003D')
        translate(width/2, height/2);



    noFill();
    stroke(lerpColor(color('blue'), color('red'), frameCount/60));
    rotate(frameCount * 6);
    strokeWeight(1);



if (frameCount < 60) {
  for (var a = 0; a < TWO_PI*8; a += 0.02) {
    var r = frameCount*60*cos(k*a);
    var x = r*cos(a);
    var y = r*sin(a);

    vertex(x,y);
  }


  }
  endShape(CLOSE);
}
