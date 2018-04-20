function highestScore (students) {
  var scoreObj = {}
  for(z = 0;z < students.length; z++){
  scoreObj[students[z].class] = {
    name: '',
    score: 0
    }; if(scoreObj[students[z].class].score < students[z].score){
      scoreObj[students[z].class].score = students[z].score
      scoreObj[students[z].class].name = students[z].name 
    }
  }
    for (var k = 0; k < students.length; k++) {
    if (scoreObj[students[k].class].score < students[k].score) {
      scoreObj[students[k].class].name = students[k].name;
      scoreObj[students[k].class].score = students[k].score;
      //starting a new loop that can finally change the value of above object
    }
  }return scoreObj
  
  
  
  

}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}