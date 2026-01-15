let thickness;
let brush;
function windowResized(){
    canvas = resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("my-container");
  thickness = 10;
}

function draw() {
  textAlign(CENTER);
  if (keyIsPressed) {
    if (keyCode === UP_ARROW || keyCode === RIGHT_ARROW ) {
      //increase thickness
      thickness += 1;
    } else if ((keyCode === DOWN_ARROW || keyCode === LEFT_ARROW) && thickness > 1){
      //decrease thickness
      thickness -= 1;
    }
    if (key == " ") {
      //clear
      clear();
    }
  }
  stroke(228, 60, 78);
  strokeWeight(thickness);
  if (key == "p" || key == "P") {
    //pen on
    brush = 1;
  }
  if (key == "m" || key == "M") {
    //pen off
    brush = 0;
  }
  if (mouseIsPressed && brush == 1) {
      line(pmouseX, pmouseY, mouseX, mouseY);}
}
