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
//
const textD = "Dolphins's avg score: "
const textK = "Koalas's avg score: "

let testData = {
  d: {a: 97, b: 108, c: 89},
  k: {a: 88, b: 91, c: 110}
}

let dAvg = Math.floor((testData.d.a + testData.d.b + testData.d.c)/3);
console.log(textD, dAvg);
let kAvg = Math.floor((testData.k.a + testData.k.b + testData.k.c)/3);
console.log(textK, kAvg);

if (dAvg > kAvg) {
  console.log(`The Dolphins win!`);
} else if (dAvg < kAvg) {
  console.log(`The Koalas win!`);
} else {
  console.log(`It was a draw.`)
}

let testDataBonus1 = {
  d: {a: 97, b: 112, c: 101},
  k: {a: 109, b: 95, c: 123}
}

let dAvgBonus1 = Math.floor((testDataBonus1.d.a + testDataBonus1.d.b + testDataBonus1.d.c)/3);
console.log(textD, dAvgBonus1);
let kAvgBonus1 = Math.floor((testDataBonus1.k.a + testDataBonus1.k.b + testDataBonus1.k.c)/3);
console.log(textK, kAvgBonus1);

if (dAvgBonus1 > kAvgBonus1) {
  console.log(`The Dolphins win!`);
} else if (dAvgBonus1 < kAvgBonus1) {
  console.log(`The Koalas win!`);
} else {
  console.log(`It was a draw.`);
}

let testDataBonus2 = {
  d: {a: 97, b: 112, c: 101},
  k: {a: 109, b: 95, c: 106}
}

let dAvgBonus2 = Math.floor((testDataBonus2.d.a + testDataBonus2.d.b + testDataBonus2.d.c)/3);
console.log(textD, dAvgBonus2);
let kAvgBonus2 = Math.floor((testDataBonus2.k.a + testDataBonus2.k.b + testDataBonus2.k.c)/3);
console.log(textK, kAvgBonus2);

if (dAvgBonus2 > kAvgBonus2) {
  console.log(`The Dolphins win!`);
} else if (dAvgBonus2 < kAvgBonus2) {
  console.log(`The Koalas win!`);
} else {
  console.log(`It was a draw.`);
}
