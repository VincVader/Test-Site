'use strict';

const btnCalc = document.querySelector('.button-calculator');
const btnMain = document.querySelector('.button-main');
const btnExtCalc = document.querySelector('.button-extended-calculator');

const btnCalcConstructor =
    document.querySelector('.button-calculator-constructor');

const btnAccum = document.querySelector('.button-accumulator');
const btnSum = document.querySelector('.button-sum');
const btnMaxSubSum = document.querySelector('.button-max-sub-sum');
const btnCamelize = document.querySelector('.button-camelize');
const btnFilterRange = document.querySelector('.button-filter-range');
const btnCopySorted = document.querySelector('.button-copy-sorted');
const btnArrShuffle = document.querySelector('.button-array-shuffle');

const btnFilterRangeInPlace =
    document.querySelector('.button-filter-range-in-place');

// empty string + empty string = empty string

// template strings next to a function considered
// as an argument passed to that function

// this.length => arguments.length => 2

const evenNumbersTo = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
};

evenNumbersTo(12);

const primeNumbersTo = (num) => {
    nextPrime: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        return i;
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


console.log(isEmpty(newObject));

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

btnCalc.addEventListener('click', () => {
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


btnCalcConstructor.addEventListener('click', () => {
    newCalculator.read();

    alert('Sum=' + newCalculator.sum());
    alert('Mul=' + newCalculator.mul());
});

/**
 * Accumulator constructor
 * adds up values
 * @param {number} startingValue - starting value?
 */
function Accumulator(startingValue = 0) {
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

btnAccum.addEventListener('click', () => {
    accumulator.read(); // adds the user-entered value
    accumulator.read(); // adds the user-entered value

    alert(accumulator.value); // shows the sum of these values
});

const randomFloatFunciton = (min, max) => {
    return Math.random() * (max - min) + min;
};
const randomIntegerFunciton = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFunciton(1, 5));
console.log(randomFloatFunciton(1, 5));

const upperCaseFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

console.log(upperCaseFirst('john') == `John`);

const checkSpam = (str) => {
    str = str.toLowerCase();
    return str.includes('xxx') || str.includes('viagra');
};

console.log(checkSpam(`innocent rabbit`));

const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        str = str.slice(0, maxLength - 1) + '...';
    }

    return str;
};

console.log(truncate(`Hi everyone!`, 20));

const arrayMiddleValue = (arr) => {
    return Math.floor(arr.length / 2);
};

const styles = ['Jazz', 'Blues'];

styles.push('Rock And Roll');
styles[arrayMiddleValue(styles)] = 'Classics';
styles.shift();
styles.unshift('Rap', 'Reggae');

console.log(styles);


const sumInput = () => {
    const sumArray = [];
    let promptValue = prompt('Enter new value:', 0);

    while (isFinite(promptValue) &&
            promptValue !== null && promptValue !== '') {
        sumArray.push(promptValue);
        promptValue = prompt('Enter new value:', 0);
    }
    return sumArray;
};

btnSum.addEventListener('click', ()=>{
    const sumArr = sumInput();
    setTimeout(console.log(sumArr), 0);
});

const getMaxSubSum = (arr) => {
    let minSum = 0;
    let maxSum = 0;

    for (const item of arr) {
        minSum += item;
        maxSum = Math.max(minSum, maxSum);
        if (minSum<0) minSum = 0;
    }
    console.log(maxSum);
};

btnMaxSubSum.addEventListener('click', getMaxSubSum);

const camelize = (str) => {
    const camelized = str
        .split('-')
        .map((word, index)=> index===0 ? word :
            word[0].toUpperCase() + word.slice(1))
        .join('');
    return camelized;
};

btnCamelize.addEventListener('click', ()=>{
    console.log(camelize('background-color'));
    console.log(camelize('list-style-image'));
    console.log(camelize('-webkit-transition'));
});

const filterRange = (arr, a, b) => {
    const filtered = arr.filter((item)=>{
        return item >= a && item <=b;
    });

    return filtered;
};


const filterRangeArray = [5, 3, 8, 1];

btnFilterRange.addEventListener('click', ()=>{
    const filtered = filterRange(filterRangeArray, 1, 4);
    console.log( filtered ); // 3,1 (matching values)
});

const filterRangeInPlace = (arr, a, b) => {
    arr.map((item, index)=>{
        if (item >= b || item <= a) arr.splice(index, 1);
    });
};

const filterRangeInPlaceArray = [5, 3, 8, 1];

btnFilterRangeInPlace.addEventListener('click', ()=>{
    filterRangeInPlace(filterRangeInPlaceArray, 1, 4);
    console.log(filterRangeInPlaceArray);
});

const copySorted = (arr) => {
    const newArr = arr.slice();
    return newArr.sort();
};

const copySortedArray = ['HTML', 'JavaScript', 'CSS'];

btnCopySorted.addEventListener('click', () => {
    const sorted = copySorted(copySortedArray);

    console.log( sorted ); // CSS, HTML, JavaScript
    console.log( copySortedArray ); // HTML, JavaScript, CSS (no changes)
});

/**
 * ExtendedCalculator constructor
 * takes a string like "1 + 2" in the format “NUMBER operator NUMBER”
 * and returns the result.
 */
function ExtendedCalculator() {
    this.methods = {
        '+': (a, b) => a+b,
        '-': (a, b) => a-b,
    },

    this.calculate = function() {
        const str = prompt(`Calculate:
            '{number} {operator} {number}'`, '1 + 2') || '1 + 2';
        const split = str.split(' ');
        const a = +split[0];
        const operator = split[1];
        const b = +split[2];

        return this.methods[operator](a, b);
    },

    this.addMethod = function(operator, func) {
        return this.methods[operator] = func;
    };
}

const powerCalc = new ExtendedCalculator();

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

btnExtCalc.addEventListener('click', ()=>{
    const calc = powerCalc.calculate();
    setTimeout(console.log(calc), 0);
});

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 28 };

const users = [john, pete, mary];

const names = users.map((user)=>user.name);

console.log( names ); // John, Pete, Mary

const johnEx = { name: 'John', surname: 'Smith', id: 1 };
const peteEx = { name: 'Pete', surname: 'Hunt', id: 2 };
const maryEx = { name: 'Mary', surname: 'Key', id: 3 };

const usersEx = [johnEx, peteEx, maryEx];

const usersMapped = usersEx.map((user)=>({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));

console.log( usersMapped[0].fullName, usersMapped[0].id ); // John Smith 1

const johnAg = { name: 'John', age: 25 };
const peteAg = { name: 'Pete', age: 30 };
const maryAg = { name: 'Mary', age: 28 };

const arrAg = [johnAg, peteAg, maryAg];

const sortByAge = (arr) => {
    return arr.sort((a, b)=>a.age - b.age);
};

sortByAge(arrAg);

const arrShuffle = [1, 2, 3, 4];

// Fisher–Yates Shuffle
const shuffle = (arr) => {
    const newArr = arr.slice();
    let m = newArr.length;
    let t;
    let i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = newArr[m];
        newArr[m] = newArr[i];
        newArr[i] = t;
    }
    return newArr;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const newShuffle = shuffleArray(arrShuffle);

console.log(newShuffle);

btnArrShuffle.addEventListener('click', () => shuffle(arrShuffle));

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;

const testing = () => {
    for (let i = 0; i < 10000; i++) {
        const num = shuffle(arrShuffle);
        num[0] === 1? n1++: num[0] === 2 ? n2++: num[0] === 3 ? n3++: n4++;
        num[1] === 1? n1++: num[1] === 2 ? n2++: num[1] === 3 ? n3++: n4++;
        num[2] === 1? n1++: num[2] === 2 ? n2++: num[2] === 3 ? n3++: n4++;
    }
    return [n1, n2, n3, n4];
};

console.log(testing());

const getAverageAge = (arr) => {
    const newArr = arr.slice();

    let totalAge = 0;
    newArr.map((user) => {
        totalAge += user.age;
    });
    return Math.round(totalAge / newArr.length);
};

console.log(getAverageAge(arrAg));

const unique = (arr) => {
    const newArr = [];

    for (const item of arr) {
        if (!newArr.includes(item)) newArr.push(item);
    }

    return newArr;
};

const strings = ['Hare', 'Krishna', 'Hare', 'Krishna',
    'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];

console.log( unique(strings) ); // Hare, Krishna, :-O

const usersTest = [
    { id: 'john', name: 'John Smith', age: 20 },
    { id: 'ann', name: 'Ann Smith', age: 24 },
    { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const groupById = (arr) => {
    const obj = {};
    for (const item of arr) {
        obj[item.id] = item;
    }
    return obj;
};

console.log(groupById(usersTest));

const solveDominus = (arr) => {
    const arrCopy = arr.slice().reverse();

    const newArr = [];
    let dominus = -Infinity;

    arrCopy.map((item)=>{
        if (item>dominus) {
            dominus = item;
            newArr.unshift(item);
        }
    });
    return newArr;
};

const intersect = (arr) => {
    if (arr.length === 0) return [];

    const t = arr.map((el)=>el.split('-').map(Number))
        .sort((a, b)=> (a[0]-b[0]));
    const temp = t.slice(0, 1);
    t.slice(1).forEach((el)=> {
        const last = temp[temp.length-1];
        if (last[1] >= el[0]) {
            if (last[1] <= el[1]) {
                last[1] = el[1];
            }
        } else {
            temp.push(el);
        }
    });
    return temp;
};

btnMain.addEventListener('click', () => {
    console.log(intersect(['1-3', '4-7']));
    console.log(solveDominus([3, 5, 123, 53]));
});

// function unique(arr) {
//     /* your code */
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   alert( unique(values) ); // Hare, Krishna, :-O
