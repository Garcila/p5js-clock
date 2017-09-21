function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  translate(300,300);
  rotate(-90);
  background(51);

  let hr = hour();
  let min = minute();
  let sec = second();
  let startAngle = 0;
  let endAngleHr = (hr * 360 / 12);
  let endAngleMin = (min * 360 / 60);
  let endAngleSec = (sec * 360 / 60);

  noFill();

  stroke(10 + sec * 4);
  strokeWeight(2);
  ellipse(0,0,545,545);

  strokeWeight(30);
  stroke(50, 200, 0 + hr * 10);
  arc(0, 0,500,500, startAngle, endAngleHr);
  
  strokeWeight(20);
  stroke(250, 0 + min * 4, 55);
  arc(0, 0,440,440, startAngle, endAngleMin);
  
  strokeWeight(10);
  stroke(0 + sec*4, 20, 255);
  arc(0, 0,399,399, startAngle, endAngleSec);

  fill(55, sec * 4, sec * 4, 200);
  stroke(55, sec * 4, sec * 4, 100);
  ellipse(0,0,sec*7);

  fill(sec * 4 );
  noStroke();
  rotate(90);
  text(`${hr < 12 ? hr : hr - 12}:${min}:${sec}`,250,290);
}