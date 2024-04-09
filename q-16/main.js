let guestList = ["Muneeb", "Shahmeer", "Ali"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Respected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);
}
console.log('\nAli is not coming for dinner.!');
let oldGuest = "Ali";
let newGuest = "Mudassir Ali";
guestList[2] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nRespected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);
}
console.log("\nGuests. now i found a big dinner table so i should more guest for dinner.\n");
let firstNewGuest = "Hamza";
let secondNewGuest = "Muhaimin";
let thirdNewGuest = "Shakeeb";
guestList.unshift(firstNewGuest);
guestList.splice(2, 0, secondNewGuest);
guestList.push(thirdNewGuest);
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nRespected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);
}
console.log(guestList);
export {};
