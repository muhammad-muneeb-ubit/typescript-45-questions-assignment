let number: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach((num) => {
    if (num == 1) {
        console.log(` ${num}st`);
    }else if (num == 2){
        console.log(` ${num}nd`);
    }else{
        console.log(` ${num}th`);
    }
});

