function passwordValidator(input) {
    let password = input;   

    function lengthPassword (password) {
        let countSymbol = password.length;
        if (countSymbol >= 6 && countSymbol <= 10) {
            return true;
        } else {
            return false;
        }
    }

   function consistLetterAndDigits (password) {
        for (const symbol of password) {
            let currentChar = symbol.charCodeAt(0);

            if (!(currentChar >= 65 && currentChar <= 90) && !(currentChar>= 97 && currentChar<= 122) &&
             !(currentChar>= 48 && currentChar<= 57)) {
                return false;
            } 
        }
        return true;
        }

    function leastTwoDigits (password) {
        let countDigits = 0;

        for (const symbol of password) {
            let currentChar = symbol.charCodeAt(0);

            if (currentChar>= 48 && currentChar<= 57) {
                countDigits ++;
            }

            if (countDigits === 2) {
                return true;
            }
        }

        return false;

    }

    if (lengthPassword(password) && consistLetterAndDigits(password) && leastTwoDigits(password)) {
        console.log('Password is valid');
    }

    if (!lengthPassword(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!consistLetterAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (!leastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
    }
}

//passwordValidator('logIn');
console.log('----------------');
//passwordValidator('MyPass123');
console.log('----------------');
passwordValidator('Pa$s$s');