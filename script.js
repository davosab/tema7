let sunX = 400;
let sunY = 200;
let sunD = 50;
let sunR = sunD/2;
let sunGap = 6;

let triBase = 12;
let triHeight = 18;

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

  // mercury
  ellipseDimPlanetDimDegrees(240, 110, 30, 225, "#95999c");
  

}

function ellipseDimPlanetDimDegrees(ew, eh, pDia, deg, pColour) {
  fill("#00000000");
  stroke("#49768f");
  ellipse(sunX, sunY, ew, eh);
  stroke("black");
  fill(pColour);
  circle(sunX + ew/2 * cos(deg), sunY + eh/2 * sin(deg), pDia);
}