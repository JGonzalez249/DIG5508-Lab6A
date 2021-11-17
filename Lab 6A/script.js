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
