// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
//
// Hint: Use an if/else statement 😉


// const markWeight1 = 78;
// const markHeight1 = 1.69; 
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;


// const markWeight2 = 95;
// const markHeight2 = 1.88; 
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// const markBMI1 = markWeight1 / (markHeight1 ** 2);
// const markBMI2 = markWeight2 / (markHeight2 ** 2);
// const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
// const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// console.log(markBMI1, markBMI2, johnBMI1, johnBMI2);

// let markHigherBMI = markBMI1 > johnBMI1;
// console.log(`Mark's BMI higher than John's? A: ${markHigherBMI}.`);

// markHigherBMI = markBMI2 > johnBMI2;
// console.log(`Q: Is Mark's BMI higher than John's? A: ${markHigherBMI}.`);

if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI ${markBMI1} is higher than John's ${johnBMI1}!`);
} else {
  console.log(`John's BMI ${johnBMI1} is higher than Mark's ${markBMI1}!`);
};

if (markBMI2 > johnBMI2) {
  console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}!`);
} else {
  console.log(`John's BMI ${johnBMI2} is higher than Mark's ${markBMI2}!`);
};


