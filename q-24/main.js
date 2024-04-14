let myName = 'Muhammad Muneeb';
console.log("Is name == 'Muhammad Muneeb'? I predict True.");
console.log(myName == 'Muhammad Muneeb');
let myNameSecond = 'Muhammad Ali';
console.log("Is name == 'Muhammad Muneeb'? I predict False.");
console.log(myNameSecond == 'Muhammad Muneeb');
let country = 'Pakistan';
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == 'Pakistan');
let countrySecond = 'pakistan';
console.log("Is countrySecond == 'pakistan'? I predict False.");
console.log(countrySecond == 'pakistan');
let myFirstNumber = 3;
console.log("Is myFirstNumber == 3 ? I predict True.");
console.log(myFirstNumber == 3);
let mySecondNumber = 33;
console.log("Is mySecondNumber == 3 ? I predict False.");
console.log(mySecondNumber == 3);
let myThirdNumber = 10;
let myForthNumber = 10;
console.log("Is myThirdNumber > myForthNumber  ? I predict True.");
console.log(myThirdNumber > myForthNumber);
console.log("Is mySecondNumber < myForthNumber ? I predict False.");
console.log(myThirdNumber < myForthNumber);
console.log("Is mySecondNumber =< myForthNumber ? I predict False.");
console.log(myThirdNumber <= myForthNumber);
let sentence = "my name is muneeb and i like playing cricket";
if (sentence.includes("muneeb") && sentence.includes("cricket")) {
    console.log("Test clear using and operator");
}
if (sentence.includes("muneeb") || sentence.includes("cricket")) {
    console.log("Test clear using or operator");
}
let userArray = ["html", "css", "javascript", "typescript"];
let itemToFind = "html";
for (let i = 0; i < userArray.length; i++) {
    if (itemToFind === userArray[i]) {
        console.log(`Item found & item is : ${userArray[i]};`);
    }
    else {
        console.log("Item not found!!!");
    }
}
export {};
