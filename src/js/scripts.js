'use strict';

// empty string + empty string = empty string
console.log([] + []); // =>

// template strings next to a function considered
// as an argument passed to that function

// this.length => arguments.length => 2

const evenNumbersTo = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};

evenNumbersTo(12);
console.log('!!!!!!!!!!');
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }

const primeNumbersTo = (num) => {
    nextPrime:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
};

primeNumbersTo(12);
