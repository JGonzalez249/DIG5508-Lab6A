let backgroundImg
let facts = []

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