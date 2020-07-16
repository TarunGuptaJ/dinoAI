

function nextGeneration(){
    console.log("Next Generation");
    calculateFitness();


    for(let i =0;i<TOTAL;++i){
        unicorns[i] = pickOne();
    }
    savedUnicorns = [];
}

function pickOne(){
    var index = 0;
    var r = random(1);
    while(r>0){
        r = r - savedUnicorns[index].fitness;
        index++;
    }
    index--;

    let unicorn = savedUnicorns[index];
    let child = new Unicorn(unicorn.brain);
    child.mutate();
    return child;
}

// function pickOne(){
//     let unicorn = random(savedUnicorns);
//     let child = new Unicorn(unicorn.brain);
//     child.mutate();
//     return child;
// }

function calculateFitness(){
    let sum = 0;
    for(let unicorn of savedUnicorns){
        sum+=unicorn.score;
    }
    for(let unicorn of savedUnicorns){
        unicorn.fitness = unicorn.score/sum;
    }
}