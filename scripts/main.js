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

console.log(setAlphabet('a','b','c','d','e'));

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