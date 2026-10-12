class ScoreChecker {
  scores = [80, 65, 92]; // a field belonging to each object

  isPass(score) {
    return score >= 70;
  }

  checkScores() {
    for (const score of this.scores) {
      const passed = this.isPass(score);

      if (passed) {
        console.log(`${score}: Pass`);
      } else {
        console.log(`${score}: Try again`);
      }
    }
  }
}

const checker = new ScoreChecker(); // create an object
checker.checkScores();  

///above with class

//below with only fuunction

const marks = [ 60,86,96,35];

function checkMarks(){
    for (const m of marks){
        if (m >= 70){
            console.log(`${m} : Pass`);
        }
        else{
            console.log(`${m} : fail`);
        }
    }
}
     const result = checkMarks();