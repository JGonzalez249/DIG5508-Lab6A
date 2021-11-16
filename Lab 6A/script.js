function setup() {
    createCanvas(400, 400);
    getAnimalFact()
  }
  
  function draw() {
    background(220);
  }
  
  function getAnimalFact(){
    var fact = Math.floor(Math.random() * 5)
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood/' + fact, {
      method: 'GET', // The method
    }).then(response => {
      console.log(response.body)
      return response.json();
    }).catch(err => {
      // In case it errors.
    })
  }
