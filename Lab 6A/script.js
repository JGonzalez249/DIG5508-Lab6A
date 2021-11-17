// function preload(){
//   fma = loadImage("https://ibb.co/Yc0fT3b")
//   blackClover = loadImage("https://ibb.co/McWkSx9")
//   dragonBall = loadImage("https://ibb.co/wdxrt55")
//   bleach = loadImage("https://ibb.co/PgyCx8k")
//   jujutsu = loadImage("https://ibb.co/c2JZ60J")
//   naruto = loadImage("https://ibb.co/G3VvX65")
//   gintama = loadImage("https://ibb.co/GHdvjcH")
//   onePiece = loadImage("https://ibb.co/Rh28pdx")
//   demonSlayer = loadImage("https://ibb.co/DpPHDtS")
//   aot = loadImage("https://ibb.co/przZsqD")
//   hunter = loadImage("https://ibb.co/CwWxWLP")
//   mha = loadImage("https://ibb.co/zRzLBMv")
// }

function setup() {
  createCanvas(400, 400);
  getAnimeFact().then((data) => {
    console.log(data);
 })
}

function draw() {
  background(220);

}

function getAnimeFact(){
  var fact = Math.floor(Math.random() * 5) + 1
  var URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1/jujutsu_kaisen/' + fact.toString()
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
     //console.log(data.data.fact)
    return data.data.fact
  }).catch(err => {
    console.log(err)
  })
}
