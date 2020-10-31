// let country = "U. S. of A";
// let continent = "North America";
// let population = 330149796;
// let suffix = " million";
// let children;
// children = "Cohen and Clover";

// console.log(country);
// console.log(continent);
// console.log(population + suffix);
// console.log(children);

// let javascriptIsFun = true;
// console.log("Q: Is JS fun?" + " A: " + javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Caleb');

// javascriptIsFun = 'YES!';


// const birthYear = 1991;

const currentYear = 2020;
const ageCaleb = 44;
const ageCody = 41;
const ageClover = 10;
const ageCohen = 12;

console.log(currentYear - ageCohen);
console.log(currentYear - ageClover);
console.log(currentYear - ageCody);
console.log(currentYear - ageCaleb);

console.log(ageCaleb * 2, ageCaleb / 2, 2 ** 6);

const firstName = "Caleb";
const lastName = "Sanderson";

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// Assignment operators:
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 4; // x = x / 4 = 25
x++; // x = x + 1  = 26
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageCaleb > ageCody);
console.log(ageClover > ageCohen);
console.log(ageClover >= 11);

let z, y;
z = y = 25 - 10 -5; // x = y = 10, x = 10;
console.log(z, y);

const wrongAverageAge = ageCaleb + ageCody / 2;
const rightAverageAge = (ageCaleb + ageCody) / 2;
console.log(wrongAverageAge);
console.log(rightAverageAge);
