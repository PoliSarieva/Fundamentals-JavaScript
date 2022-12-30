function palindrome (input) {
    let inputArr = input;

    function checkingPalindrime (inputNumber) {
        let number = inputNumber.toString();
        let isPalendrome = true;

        for (let index = 0; index < number.length; index++) {
            let secondIndex = number.length - 1 - index;
            let firstNumber = number[index];
            let lastNumber = number[secondIndex];
            

            if (!testPalendrome(firstNumber, lastNumber)) {
                isPalendrome = false;
                break;
            }
            
        }

        if (isPalendrome) {
            return true;
        } else {
            return false;
        }

        function testPalendrome (firstNumber, lastNumber) {
            if (firstNumber === lastNumber) {
                return true;
            } else {
                return false;
            }

        }
    }

    for (let i = 0; i < inputArr.length; i++) {
        let currentNum = inputArr[i];
        console.log(checkingPalindrime(currentNum));
    }

}

palindrome ([123,323,421,121]);