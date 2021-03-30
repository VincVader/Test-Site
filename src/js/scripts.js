'use strict';

const t1 = performance.now();

// STOPWATCH

const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');

// /STOPWATCH

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

const arrAnagram =
    ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

const acleanM = (arr) => {
    const map = new Map();

    for (const word of arr) {
        const sorted = word.toLowerCase().split('').sort().join('');
        if (!map.has(sorted)) map.set(sorted, word);
    }
    return [...map.values()];
};

const acleanO = (arr) => {
    const newArr = arr.slice();
    const map = {};

    for (const word of newArr) {
        const sorted = word.toLowerCase().split('').sort().join('');
        if (!Object.prototype.hasOwnProperty.call(map, word)) {
            map[sorted] = word;
        }
    }
    return Object.values(map);
};

console.log( acleanO(arrAnagram) ); // "nap,teachers,ear" or "PAN,cheaters,era"
console.log( acleanM(arrAnagram) ); // "nap,teachers,ear" or "PAN,cheaters,era"

const user123 = { name: 'John', years: 30 };

// your code to the left side:
const { name, years: age, isAdmin = true } = user123;

console.log( name, age, isAdmin ); // John 30 False


const salaries123 = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
};

const topSalary = (salaries) => {
    if (Object.values(salaries).length === 0) return null;

    let maxName = '';
    let maxSalary = 0;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) maxSalary = salary, maxName = name;
    }
    return maxName;
};

console.log(topSalary(salaries123));

const sumToLoop = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};
const sumToRecursion = (n) => {
    return n == 1 ? 1: n + sumToRecursion(n - 1);
};

const sumToProgression = (n) => {
    return n * (n + 1)/2;
};

console.log(sumToLoop(10000), sumToRecursion(10000), sumToProgression(10000));

const factorial = (n) => {
    return n === 1 ? 1: n * factorial(n-1);
};

console.log(factorial(5));

const fibonacci = (n) => {
    let first = 1;
    let second = 1;
    let temp = 1;

    for (let i = 3; i <= n; i++) {
        temp = second;
        second += first;
        first = temp;
    }
    return second;
};

console.log(fibonacci(77));


/* .. your code for inBetween and inArray */
const arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (min, max) => {
    return function(x) {
        return x >= min && x <= max;
    };
};

const inArray = (arr) => {
    return function(a) {
        return arr.includes(a);
    };
};

console.log( arr.filter(inBetween(3, 6)), // 3,4,5,6
    arr.filter(inArray([1, 2, 10]))); // 1,2

const makeCounter = () => {
    let count = 0;
    const counter = () => {
        return count++;
    };

    counter.decrease = () => count--;
    counter.set = (value) => {
        return count = value;
    };
    return counter;
};

const counter = makeCounter();

console.log( counter() ); // 0

const sum = (a) => {
    let currentSum = a;

    const f = (b) => {
        currentSum += b;
        return f;
    };

    f.toString = function() {
        return currentSum;
    };

    return f;
};

console.log( sum(0)(1)(2)(3)(4)(5) ); // 15

const halvingSum = (n) => {
    return n === 1 ? n: n + halvingSum(Math.floor(n/2));
};

console.log(halvingSum(25)); // 47

/*

Мы детективы и нам предстоит взломать сейф. Сейф цифровой:

 ┌───┬───┬───┐
 │ 1 │ 2 │ 3 │
 ├───┼───┼───┤
 │ 4 │ 5 │ 6 │
 ├───┼───┼───┤
 │ 7 │ 8 │ 9 │
 └───┼───┼───┘
     │ 0 │
     └───┘

У нас есть свидетель, человек, который видел как этот сейф открывают. Этот
свидетель знает какие примерно цифры были нажаты, нужно реализовать функцию
getPINs, которая принимает строку с примерным набором цифр, которые видел
свидетель, а возвращает набор возможных PIN-кодов к сейфу в виде массива строк.
Свидетель знает в какой области была нажата кнопка, но точно не может сказать
какая. Однако свидетель уверен что его максимальная ошибка составляет одну цифру
в сторону (вверх, вниз, вправо или влево). То есть если свидетель говорит что
была нажата 2, значит могла быть нажата любая клавиша из `[1, 2, 3, 5]`.
*/

const variants = [
    ['8', '0'], // 0
    ['1', '2', '4'], // 1
    ['1', '2', '3', '5'], // 2
    ['2', '3', '6'], // 3
    ['1', '4', '5', '7'], // 4
    ['2', '4', '5', '6', '8'], // 5
    ['3', '5', '6', '9'], // 6
    ['4', '7', '8'], // 7
    ['5', '7', '8', '9', '0'], // 8
    ['6', '8', '9'], // 9
];
const getPINs = (observed) => {
    const arrObserved = observed.split('');

    if (arrObserved.length === 1) return variants[+arrObserved[0]];
    const nums = variants[arrObserved[0]];
    const nextVariants = getPINs(observed.slice(1));

    const combination = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nextVariants.length; j++) {
            const num = nums[i] + nextVariants[j];
            combination.push(num);
        }
    }
    return combination;
};
// ["5", "7", "8", "9", "0"]
console.log(getPINs('8'));
// ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
console.log(getPINs('11'));

const objCreator = (arr) => {
    if (arr.length === 0) return {};
    const created = {};
    created[arr[0]] = objCreator(arr.slice(1));

    return created;
};

console.log(objCreator(['a', 'b', 'c'])); // {a:{b:{c:{}}}}
console.log(objCreator(['a', 'b', 'c', 'd'])); // {a:{b:{c:{d:{}}}}}
console.log(objCreator([])); // {}

/*
Прислал Геворг.

Необходимо реализовать функцию accum, которая принимает строку, а возвращает
другую строку, как показано в примерах.

аккумулятор ("abcd") -> "A-Bb-Ccc-Dddd"
аккумулятор ("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
аккумулятор ("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр аккумулятора - это строка, которая включает только буквы от a..z и A..Z
*/

const accum = (str) => {
    str = str.toLowerCase();
    const arrStr = str.split('');
    let answer = '';
    arrStr.map((letter, index) => {
        answer += letter.toUpperCase() + letter.repeat(index) + '-';
    });
    return answer.slice(0, -1);
};

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"


const solution = (params) => {
    let answer = [];
    if (params.length === 0) return answer.slice(0, -1);
    if (params.length < 2) return params + '_';
    answer.push(params.slice(0, 2));
    answer.push(solution(params.slice(2)));
    answer = answer.flat();
    return answer;
};

console.log(solution('abc'));
console.log(solution('abcdef'));

const debounce = (f, ms) => {
    let timeout = null;
    return function() {
        const callNow = !timeout;
        /* eslint-disable */
        const next = () => f.apply(this, arguments);
        /* eslint-enable */
        clearTimeout(timeout);
        timeout = setTimeout(next, ms);

        if (callNow) {
            next();
        }
    };
};

debounce(console.log, 1000);

const getDigitSum = (num) => {
    const str = String(num).split('');
    if (str.length < 2) return +str;
    let sum = 0;
    for (const digit of str) {
        sum += +digit;
    }
    return getDigitSum(sum);
};

console.log(getDigitSum(5));
console.log(getDigitSum(57));
console.log(getDigitSum(87653));

const killer = (suspectInfo, dead) => {
    for (const [suspect, seen] of Object.entries(suspectInfo)) {
        const check = dead.every((item) => seen.includes(item));
        if (check) return suspect;
    }
};

console.log(killer({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
}, ['Lucas', 'Bill'])); // 'James'

console.log(killer({
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
}, ['Ben'])); // 'Megan'

const getPrize = (guessScore, realScore) => {
    if (guessScore === realScore) return 2;
    const guess = guessScore.split(':');
    const guessWinner = guess[0] >= guess[1];
    const real = realScore.split(':');
    if (guess[0] == guess[1] && real[0] == real[1]) return 1;
    if (guess[0] != guess[1] && real[0] == real[1] ||
        guess[0] == guess[1] && real[0] != real[1]) return 0;
    const realWinner = real[0] >= real[1];

    return guessWinner === realWinner ? 1 : 0;
};

console.log(getPrize('1:2', '1:2')); // 2
console.log(getPrize('2:1', '5:0')); // 1
console.log(getPrize('3:0', '2:2')); // 0
console.log(getPrize('0:0', '3:3')); // 1
console.log(getPrize('2:3', '3:3')); // 0
console.log(getPrize('3:3', '2:3')); // 0
console.log(getPrize('3:3', '33:33')); // 1


const t2 = performance.now();

console.log(`${(t2 - t1).toFixed(0)} ms`);


let stopWatch = null;
let pausedTime = 0;
let countingTime = 0;
let reset = false;
let start = Date.now();

console.log(countingTime);
startBtn.addEventListener('click', () => {
    if (stopWatch) clearInterval(stopWatch);
    if (countingTime || reset) {
        start = Date.now();
    }
    stopWatch = setInterval(() => {
        countingTime = (reset) ? 0 : Date.now() - start + pausedTime;
        const milliseconds = Math.floor((countingTime % (1000)) / 10);
        let seconds = Math.floor((countingTime % (1000 * 60)) / 1000);
        if (seconds< 10) seconds = '0' + seconds;
        let minutes = Math
            .floor((countingTime % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes< 10) minutes = '0' + minutes;
        let hours = Math
            .floor((countingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours< 10) hours = '0' + hours;

        timer.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
        if (reset) reset = false;
    }, 0);
});
pauseBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    if (!reset) pausedTime = countingTime;
    console.log(countingTime);
});

resetBtn.addEventListener('click', () => {
    timer.innerHTML = '00:00:00.000';
    reset = true;
    pausedTime = 0;
    clearInterval(stopWatch);
});
