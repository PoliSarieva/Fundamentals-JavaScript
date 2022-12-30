function createMatrix(number) {
    let inputArr = [];

    function row (number) {
        for (let i = 1; i <= number; i++) {
            inputArr.push(number);
        }

        return inputArr.join(' ');
    }

    let consistRow = row(number);
   for (let column = 1; column <= number; column++) {
        console.log(consistRow);

}

}

 createMatrix(7);