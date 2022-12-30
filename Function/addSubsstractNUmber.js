function addSubstract(first, second, third) {


    function sum (first, second) {
        return first + second;
    }
    let rezultSum = sum(first, second);

    function substract (rezultSum, third) {
        return rezultSum - third;
    }

    let rezult = substract(rezultSum, third);

    console.log(rezult);
}


addSubstract (23,6,10);
addSubstract(1,17,30);
addSubstract(42,58,100);