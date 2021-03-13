'use strict'

// empty string + empty string = empty string
console.log([] + []); // => 



// template strings next to a function considered as an argument passed to that function
function a(argument) {
    return 'hello ' + argument;
}

const sentence = a `name`; // so basicly: a `name` = a("name")

console.log(sentence); // => 'hello name'


function y() {
    console.log(this.length); // this.length => arguments.length => 2 
}

let x = {
    length: 5,
    method: function (y) {
        arguments[0](); // arguments = {y,1} so arguments[0]() => y()
    }
}

x.method(y, 1); // => 2

function nau(...y) {
    return Array.prototype.slice.call(arguments).length;
}

console.log(nau(1, 2, 3, 4, 5));

let A = {
    x: function () {
        console.log('x');
        return this
    },
    y: function () {
        console.log('y');
        return this
    },
    z: function () {
        console.log('z');
    }
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

array.forEach(elem => {
    newArray.push(elem *= elem)
});

console.log(newArray);

newArray = array.map(elem => elem *= elem)
console.log(newArray);

function setAlphabet() {
    let arr = [...arguments]
    return arr;
}

console.log(setAlphabet('a', 'b', 'c', 'd', 'e'));

console.log(this);

let user = {
    name: 'Max',
    sayHi() {
        console.log('Hello!');
    }
}

user.sayHi();

function sayHi(name) {
    let phrase = 'hello, ' + name;
    console.log(phrase);
}

sayHi('Jack');

console.log('object :>> ', sayHi);

const counter = () => {
    let currentCount = 1;
    return function () {
        return currentCount++;
    }
}

let coo = counter()

console.log(coo());
console.log(coo());
console.log(coo());

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = i;
    buttons[i].onclick = function () {
        console.log(i);
    }
}
// call() - ?
// func.call(context,arg1,arg2, ...n);

function showFullName(firstPart, lastPart) {
    console.log(this[firstPart] + ' ' + this[lastPart]);
};

user = {
    firstName: 'Jane',
    lastName: 'Star',
    patronymic: 'Ивановна'
}

showFullName.call(user, 'firstName', 'lastName');
showFullName.call(user, 'firstName', 'patronymic');

function useless() {
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
}

useless('water', 'salt', 'pepper', 'sugar')

// apply() - ?

// func.apply(context, [arg1,arg2,...argn]);

function sum(x, y) {
    return x + y;
};

let result = sum.apply(null, [3, 5]);
console.log(result);

function sumDynamic() {
    let res = 0
    for (let i = 0; i < arguments.length; res += arguments[i++]);
    return res;

}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultDynamic = sumDynamic.apply(null, test);

console.log(resultDynamic);

let arr123 = [1, 2, 3];
console.log(Math.max.apply(null, arr123));
console.log(Math.max(...arr123));

let username = "John",
    admin = username;

console.log(admin);

