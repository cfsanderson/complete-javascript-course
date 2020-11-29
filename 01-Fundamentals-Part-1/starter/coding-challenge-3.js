// There are two gymnastics teams, Dolphins and Koalas. They compete against each other o times. The winner with the highest average score wins a trophy!
//
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
//
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
//
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
//
// Test data:
//  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const textD = "Dolphins's avg score: ";
const textK = "Koalas's avg score: ";

let roundOne = {
  dolphins: { a: 97, b: 108, c: 89 },
  koalas: { a: 88, b: 91, c: 110 }
};

let dolphinsAvgRoundOne = Math.floor((roundOne.dolphins.a + roundOne.dolphins.b + roundOne.dolphins.c) / 3);

console.log(textD, dolphinsAvgRoundOne);

let koalasAvgRoundOne = Math.floor((roundOne.koalas.a + roundOne.koalas.b + roundOne.koalas.c) / 3);

console.log(textK, koalasAvgRoundOne);

if (dolphinsAvgRoundOne > koalasAvgRoundOne) {
  console.log(`The Dolphins win, ${dolphinsAvgRoundOne} to ${koalasAvgRoundOne}! 🎉`);
} else if (dolphinsAvgRoundOne < koalasAvgRoundOne) {
  console.log(`The Koalas win, ${koalasAvgRoundOne} to ${dolphinsAvgRoundOne}! 🎉`);
} else {
  console.log(`It was a draw. 😶`);
}

let roundTwo = {
  dolphins: { a: 97, b: 112, c: 101 },
  koalas: { a: 109, b: 95, c: 123 }
};

let dolphinsAvgRoundTwo = Math.floor((roundTwo.dolphins.a + roundTwo.dolphins.b + roundTwo.dolphins.c) / 3);

console.log(textD, dolphinsAvgRoundTwo);

let koalasAvgRoundTwo = Math.floor((roundTwo.koalas.a + roundTwo.koalas.b + roundTwo.koalas.c) / 3);
console.log(textK, koalasAvgRoundTwo);

if (dolphinsAvgRoundTwo > koalasAvgRoundTwo) {
  console.log(`The Dolphins win!`);
} else if (dolphinsAvgRoundTwo < koalasAvgRoundTwo) {
  console.log(`The Koalas win!`);
} else {
  console.log(`It was a draw.`);
}

let round3 = {
  dolphins: { a: 97, b: 112, c: 101 },
  koalas: { a: 109, b: 95, c: 106 }
};

let dolphinsAvgRoundThree = Math.floor((round3.dolphins.a + round3.dolphins.b + round3.dolphins.c) / 3);
console.log(textD, dolphinsAvgRoundThree);
let koalasAvgRoundThree = Math.floor((round3.koalas.a + round3.koalas.b + round3.koalas.c) / 3);
console.log(textK, koalasAvgRoundThree);

if (dolphinsAvgRoundThree > koalasAvgRoundThree) {
  console.log(`The Dolphins win!`);
} else if (dolphinsAvgRoundThree < koalasAvgRoundThree) {
  console.log(`The Koalas win!`);
} else {
  console.log(`It was a draw.`);
}

const dataOne = {
  Dolphins: {
    score1: 96,
    score2: 108,
    score3: 89
  },
  Koalas: {
    score1: 88,
    score2: 91,
    score3: 110
  }
};

const dataTwo = {
  Dolphins: {
    score1: 97,
    score2: 112,
    score3: 101
  },
  Koalas: {
    score1: 109,
    score2: 95,
    score3: 123
  }
};

const dataThree = {
  Dolphins: {
    score1: 97,
    score2: 112,
    score3: 101
  },
  Koalas: {
    score1: 109,
    score2: 95,
    score3: 106
  }
};

const dolphinsScores = {
  set1: [96, 108, 89],
  set2: [97, 112, 101],
  set3: [97, 112, 101]
};

const size = Object.keys(dolphinsScores.set1).length;

const sized = Object.keys(sized);
console.log(sized);

const sum = dolphinsScores.set1.reduce((sum, current) => sum + current, 0);

const dolphinsScoresAvg1 = sum / size;
console.log(dolphinsScoresAvg1);
