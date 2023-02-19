"use strict";

function factorial(x) {
    if(x === 1) {
        return x;
    } else if (x < 1) {
        console.log("Ошибка. Число меньше 1.");
    } else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(10));
