'use strict';

const calculatorButton = document.querySelector('.calculator-button');
const calculatorConstructorButton =
    document.querySelector('.calculator-constructor-button');
const accumulatorButton = document.querySelector('.accumulator-button');

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
    nextPrime: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
};

primeNumbersTo(12);

const newObject = {
    name: 'John',
    surname: 'Dove',
    age: 32,
};

newObject.surname = 'Smith';
delete newObject.name;

console.log(newObject);

const isEmpty = (obj) => {
    return Object.keys(obj).length !== 0;
};

const emptyObject = {};

console.log(isEmpty(newObject));
console.log(isEmpty(emptyObject));

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

const objectPropSum = (obj) => {
    let sum = 0;

    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            sum += obj[prop];
        }
    }

    return sum;
};

console.log(objectPropSum(salaries));

const marry = (man, woman) => {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
};

let family = marry({
    name: 'John',
}, {
    name: 'Ann',
});

family = null;

console.log(family);

const calculator = {
    read() {
        this.x = +prompt('Write the value of x:', 0);
        this.y = +prompt('Write the value of y:', 0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    },
};

calculatorButton.addEventListener('click', () => {
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
});

const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // shows the current step
        console.log(this.step);
        return this;
    },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();


/**
 * Calculator Constructor function that gets two parameters =>
 *  summarize and multiply them
 */
function Calculator() {
    /**
     * Read method
     * gets two values (x,y) from prompt
     */
    this.read = function() {
        this.x = +prompt('X?', 0);
        this.y = +prompt('Y?', 0);
    };
    /**
     * Summarize method
     * @return {number} The sum of x and y values
     */
    this.sum = function() {
        return this.x + this.y;
    };
    /**
     * Multiply method
     * @return {number} The product of x and y values
     */
    this.mul = function() {
        return this.x * this.y;
    };
}

const newCalculator = new Calculator();


calculatorConstructorButton.addEventListener('click', () => {
    newCalculator.read();

    alert( 'Sum=' + newCalculator.sum() );
    alert( 'Mul=' + newCalculator.mul() );
});

/**
 * Accumulator constructor
 * adds up values
 * @param {number} startingValue - starting value?
 */
function Accumulator(startingValue=0) {
    /**
     * @param {number} value - sets startingValue to inner variable
     */
    this.value = startingValue;

    /**
     * read method
     * use prompt to read a new number and add it to value
     */
    this.read = function() {
        this.value += +prompt('Add new number:', 0);
    };
}

const accumulator = new Accumulator; // initial value 1

accumulatorButton.addEventListener('click', () => {
    accumulator.read(); // adds the user-entered value
    accumulator.read(); // adds the user-entered value

    alert(accumulator.value); // shows the sum of these values
});

