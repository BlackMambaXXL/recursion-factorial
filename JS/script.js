"use strict";

function factorial(x) {
    if(x === 1 || x < 1) {
        return 1;
    } else if (Number.isInteger(x) === false) {
        return "Ошибка. Число не целое.";
    } else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(-2));
