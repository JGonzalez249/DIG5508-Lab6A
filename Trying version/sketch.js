let backgroundImg
let facts = []
let fade;
let fadeAmount = 1
let x = 200
let y = 100
size = 100
let i = 1
let c = 0

class Fact {
  constructor(x, y, color, fact) {
    this.x = x
    this.y = y
    this.color = color
    this.fact = fact
    this.diameter = 50
  }

  display(){
    rectMode(CENTER)
    fill(this.color)
    if(dist(this.x, this.y, mouseX, mouseY) < this.diameter/2){
      circle(this.x, this.y, this.diameter*5)
      fill(255)
      stroke(255)
      textFont('Comic Sans MS')
      textSize(16)
      textAlign(CENTER)
      text(this.fact,this.x, this.y-32, this.diameter*4)
    }else{
      circle(this.x, this.y, this.diameter)
    }
  }
}

function preload() {
  backgroundImg = loadImage('assets/background.jpeg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 1; i < 8; i++){
    getAnimeFact(i).then((data) => {
      factX = random(100, windowWidth-100)
      factY = random(100, windowHeight-100)
      factColor = color(random(255), random(255), random(255))
      facts.push(new Fact(factX, factY, factColor, data))
   })
  }

}

function draw() {
  background(255);
  rectMode(CORNER)
  image(backgroundImg, 0, 0, windowWidth, windowHeight)

  for(let fact of facts){
    fact.display()
  }

  let colLike = color(242, 64, 51);
  let button1 = createButton('Like');
  button1.style('background-color', colLike);
  button1.position(windowWidth/4 - 100, windowHeight/4 - 100);
  button1.mousePressed(Like)

  let colKnew = color(51, 153, 242);
  let button2 = createButton('Knew it!');
  button2.style('background-color', colKnew);
  button2.position(windowWidth/2 - 100, windowHeight/4-100);
  button2.mousePressed(Knew)

  if (c == 1) {
      if (i == 1) {
          if (fade <= 0){
             fadeAmount = 10;
          }

          x -= 0.1
          y -= 0.1
          size += 0.2

          if (fade >= 255) {
              fadeAmount = 0;
              fade = 0
              i++
          }

          fade += fadeAmount;

          noStroke()
          fill(255, 0, 0, fade)
          //heart shape 68-72 https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
          beginShape()
          vertex(x, y);
          bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
          bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
          endShape(CLOSE)
      }

  } else if (c == 2) {
      if (i == 1) {
          if (fade <= 0){
             fadeAmount = 10;
          }

          x -= 0.1
          y -= 0.1
          size += 0.2

          if (fade >= 255) {
              fadeAmount = 0;
              fade = 0
              i++
          }
          
          fade += fadeAmount;

          noStroke()
          fill(0, 0, 255, fade)
          //heart shape 68-72 https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
          beginShape()
          vertex(x, y);
          bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
          bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
          endShape(CLOSE)
      }


  }
}

function getAnimeFact(factID){
  var URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood/' + factID.toString()
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data.data.fact
  }).catch(err => {
    console.log(err)
  })
}

function Like() {
  c = 1
  x = 200
  y = 100
  size = 100
  i = 1
  fade = 0
}

function Knew() {
  c = 2
  x = 200
  y = 100
  size = 100
  i = 1
  fade = 0
}