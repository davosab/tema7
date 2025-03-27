let sunX = 400;
let sunY = 200;
let sunD = 80;
let sunR = sunD/2;
let sunGap = 4;

let triBase = 22;
let triHeight = 30;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}
function draw() {
  background("#010136");

  // sun
  fill("yellow");
  circle(sunX, sunY, sunD);
  // rays
  translate(sunX, sunY);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(45);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(90);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(135);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(180);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(225);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(270);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(315);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);

  resetMatrix();
  

}