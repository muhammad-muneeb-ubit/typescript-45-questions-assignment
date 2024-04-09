let guestList = ["Muneeb", "Shahmeer", "Ali"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Respected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);
}
console.log('Ali is not coming for dinner.!');
let oldGuest = "Ali";
let newGuest = "Mudassir Ali";
guestList[2] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log(`Respected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);
}
console.log("The total number of guest at the time is:" + guestList.length);
export {};
