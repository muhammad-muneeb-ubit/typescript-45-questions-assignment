let guestList :string[] = ['Hamza','Muneeb','Muhaimin','Shahmeer','Mudassir Ali','Shakeeb'];
console.log("Sorry to all guest that we have space for only two quests.")
while (guestList.length>2) {
    let removed = guestList.pop();
    console.log(`Sorry ${removed}! You are not invited for dinner`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Respected ${guestList[i]}!\nYou are invited for the dinner.\n\nThanks \n`);  
 }
 guestList.splice(0,2);
 console.log(guestList);