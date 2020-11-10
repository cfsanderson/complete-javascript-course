const hasDriverLicense = true; // A
const hasGoodvision = true; // B

console.log(hasDriverLicense && hasGoodvision);
console.log(hasDriverLicense || hasGoodvision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodvision;

// if (hasDriverLicense && hasGoodvision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive..");
// }

const isTired = false; // C
console.log(hasDriverLicense || hasGoodvision || isTired);

if (hasDriverLicense && hasGoodvision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}
