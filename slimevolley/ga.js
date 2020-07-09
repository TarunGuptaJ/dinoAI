// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Neuro-Evolution Flappy Bird

function nextGeneration() {
    console.log('next generation');
    calculateFitness();
    for (let i = 0; i < TOTAL; i++) {
      activeEle[i] = pickOne();
    }
    eliminatedEle = [];
  }
  
  function pickOne() {
    let index = 0;
    let r = random(1);
    while (r > 0) {
      r = r - eliminatedEle[index].fitness;
      index++;
    }
    index--;
    let bird = eliminatedEle[index];
    let child = new PongElement(floor(random(100,255)), bird.brain);
    child.mutate();
    return child;
  }
  
  function calculateFitness() {
    let sum = 0;
    for (let bird of eliminatedEle) {
      sum += bird.score;
    }
    for (let bird of eliminatedEle) {
      bird.fitness = bird.score / sum;
    }
  }
  