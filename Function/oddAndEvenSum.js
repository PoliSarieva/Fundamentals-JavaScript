function oddAndEvenSum (number) {
    let numString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numString.length; index++) {
        let num = Number(numString[index]);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
        //console.log(num);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);