let greatMagicians:String[] = ["baba", "kaali", "jaaali"];
function showMagicians(magicianArray:any) {
    magicianArray.forEach((value) => {
        console.log(` The great ${value}`);
        
    });
};
showMagicians(greatMagicians)
