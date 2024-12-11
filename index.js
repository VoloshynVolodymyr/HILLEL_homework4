let num = 20;

function generateRandomNumbers(count) {
    if (count <= 0 || !Number.isInteger(count)) {
        return "Invalid parameter: count must be a positive integer.";
    }

    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.round(Math.random() * 900 + 100));
    }

    return numbers;
}

function getGeneratedNumbersCount(array) {
    if (!Array.isArray(array)) {
        return "Invalid parameter: input must be an array.";
    }
    return "Count of generated numbers: " + array.length;
}

function countEvenOddNumbers(array) {
    if (!Array.isArray(array)) {
        return "Invalid parameter: input must be an array.";
    }

    let countEven = 0;
    let countOdd = 0;

    for (let number of array) {
        if (number % 2 === 0) countEven++;
        else countOdd++;
    }

    let percentageEvenToOdd = countOdd > 0 
        ? ((countEven / countOdd) * 100).toFixed(2) + "%" 
        : "There are no odd numbers";

    return (
        "Count of even elements: " + countEven + "\n" +
        "Count of odd elements: " + countOdd + "\n" +
        "Percentage of even to odd: " + percentageEvenToOdd
    );
}

function checkProbabilityTheory(count){
    let data = generateRandomNumbers(count);
    
    console.log(data);
    console.log(getGeneratedNumbersCount(data));
    console.log(countEvenOddNumbers(data));
}

checkProbabilityTheory(num);
