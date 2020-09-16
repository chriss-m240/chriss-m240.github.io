let sqWidth = 60;
let aux = -1;
let map = [0 , 1/4, 1/2, 1/4, 0, 1/4, 1/2, 1/4, 0]

function setup() {
  createCanvas(597, 540);
  background('#888888');
  frameRate(10);
}


function draw() {
  groutWidth = 139 / 25;
  background('#444444*2');
  numRows = ceil(597 / (sqWidth)) + 1;
  for (let i = 0; i < numRows; i = i + 1) {
    line(0, i * sqWidth, 480, i * sqWidth);
    push()
    translate(map[i] *mouseX, 0);
    drawRow(i);
    if (i % 4 == 0)
        push()
    pop()
  }
}

function drawRow(row) {
  yPos = row * (sqWidth);
  numSq = ceil(1000 / sqWidth) + 3;
  off = 1
  if (row % 4 == 0 && pop()) {
    pop()
  }
    
  for (let i = 0; i < 100; i = i + 1) {
    xPos = (i) * (sqWidth) - 1000
    if (i % 2 == 0) {
      fill('#000000');
    } else {
      fill('#FFFFFF');
    }

    rect(xPos + (aux * (((row) * (145 / 5)) % (2 * (sqWidth)))), yPos, sqWidth, sqWidth);
  }

  if (row % 2 == 0) {
    aux = aux * -1;
  }
}