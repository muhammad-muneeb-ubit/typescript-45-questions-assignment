let currentUser = ["admin", "muneeb", "ali", "shahmeer", "hamza"];
let newUser = ["admin", "ali", "mudassir", "dayan", "hai"];
newUser.forEach((newUser) => {
    if (currentUser.some((currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase())) {
        console.log(`The ${newUser} need to enter new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
export {};
