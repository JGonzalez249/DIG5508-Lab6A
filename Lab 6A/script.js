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

let fade;
let fadeAmount = 1
let x = 200
let y = 100
size = 100
let i = 1
let c = 0

function setup() {
    createCanvas(400, 400);
    getAnimeFact().then((data) => {
        console.log(data);
    })
    fade = 0
}

function draw() {
    background(220);
    let colLike = color(242, 64, 51);
    let button1 = createButton('Like');
    button1.style('background-color', colLike);
    button1.position(38, 400);
    button1.mousePressed(Like)

    let colKnew = color(51, 153, 242);
    let button2 = createButton('Knew it!');
    button2.style('background-color', colKnew);
    button2.position(310, 400);
    button2.mousePressed(Knew)

    if (c == 1) {
        if (i == 1) {
            if (fade <= 0) fadeAmount = 10;



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
            if (fade <= 0) fadeAmount = 10;



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
function getAnimeFact() {
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

function Like() {
    c = 1
    x = 200
    y = 100
    size = 100
    i = 1


}

function Knew() {
    c = 2
    x = 200
    y = 100
    size = 100
    i = 1
}
