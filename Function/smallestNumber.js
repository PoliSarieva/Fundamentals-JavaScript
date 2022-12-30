function smallestNumber (firstNumber,secondNumber,thirdNumber) {

    let smallest;

    if (firstNumber < secondNumber && firstNumber < thirdNumber) {
        smallest = firstNumber;
    } else if (secondNumber < firstNumber && secondNumber < thirdNumber){
        smallest = secondNumber;
    } else {
        smallest = thirdNumber;
    }
    console.log(smallest);
}

smallestNumber(2,5,3);
smallestNumber(600,342,123);