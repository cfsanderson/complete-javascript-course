/* let js = 'amazing';
let jx = 'just amazing';
if (js === 'amazing') alert('JavaScript is FUN!!');
if (jx === 'just amazing') alert('JavaScript is just amazing!!');

console.log(40 + 8 + 23 - 10);

let firstName = "Caleb";
console.log(firstName);
*/

// const firstName = "Caleb";
// const job = "Product Designer";
// const birthYear = 1976;
// const year = 2020;

// const caleb = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(caleb);

// console.log("String with \n\
// multiple \n\
// lines"
// );

// console.log(`Template literal string with
// multiple
// lines`
// );

// const age = 15;

// if(age >= 18) {
//  console.log(`Sarah can start her driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years 😕`);
// }

// Control structure:
// if () {} else {};

// const birthYear = 2003;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// };

// console.log(`${century} century`);
//
//
// Type Conversion:
//
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Caleb'));
// console.log(typeof NaN);

// console.log(String(23), 23);


//
// Type Coercion:
//
// JS automaticaly coerces NUMs into a string in this scnenario
// console.log('I am ' + 44 + ' years old.');
// // when using -, *, <, or > the num is kept
// console.log('23' - '10' - 3);
// // Example:
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN, and false (duh)
// truthy = everything else

// console.log(Boolean(0));            //false
// console.log(Boolean(undefined));    //false
// console.log(Boolean('Caleb'));      //true
// console.log(Boolean({}));           //true
// console.log(Boolean(''));           //false


// // if money = 0 then it will be false. If it is ANY other number, it will be true.
// const money = 0;
// if(money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// // if height = undefined, then it will be false. If it is ANY truthy nu, it will be true.
// let height;
// if(height === 0 || true) {
//   console.log("Yay! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// // loose and strict equal (loose does not perform coercion)
// const age = '18';
// if(age === 18) console.log("You just became an adult. (strict)");
// if(age == 18) console.log("You just became an adult. (loose)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof(favorite));

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if(favorite === 7) {
  console.log("7 is also a cool number.");
} else if(favorite === 9) {
  console.log("9 is OK.");
} else {
  console.log("Number is not 23 or 7")
}

if(favorite !== 23) console.log("Why not 23?");
