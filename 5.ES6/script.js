/********************* Let and Const **********************/

//ES5
var name5 = 'some name';
var age5 = 21;
name5 = 'new some name';
console.log(name5);

//ES6
const name6 = 'some es6 name'; //constant
let age6 = 23; //variable -> var, let == var
//name6 = 'new es6 name'; -> cant change
console.log(name6);


//function scoped -> var, block scoped -> let/const

//ES5
function driverLicense5(passedTest) {
    if (passedTest) {
        var fName = 'some fName';
        var yob = 1999;
    }
    console.log(fName + ' ' + yob);
}

driverLicense5(true);

//ES6 -> let and const are only accessible in same scope
function driverLicense6(passedTest) {
    if (passedTest) {
        let fName = 'some fName';
        const yob = 1999;
    }
    //console.log(fName+ ' ' + yob); -> wont work
}

driverLicense6(true);

//other method
function driverLicense6b(passedTest) {
    let fName;
    //const yob;
    if (passedTest) {
        fName = 'some fName';
        //yob = 1999;
    }
    console.log(fName);
    //console.log(yob); -> wont work as its a constant
}

driverLicense6b(true);

//right method
function driverLicense6c(passedTest) {
    let fName;
    const yob = 1999;
    if (passedTest) {
        fName = 'some fName';
    }
    console.log(fName + ' ' + yob);
}

driverLicense6c(true);

//other example of block scope
//ES5
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
console.log(' ');

//ES6
let j = 23;
for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);

/********************* Blocks And IIFEs **********************/

//IIFEs
//ES5
(function () {
    var c = 3;
})();
//console.log(c); -> not accessible

//block
//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + ' '+b); -> not accessible
console.log(c);// -> accessible because its a var

/********************* Strings **********************/

let fName = 'some fName';
let lName = 'some lName';
const yob = 1999;

function calcAge(year) {
    return 2020 - year;
}

//ES5
console.log('Name: ' + fName + ' ' + lName + ', ' + 'age: ' + calcAge(yob));

//ES6 -> called template literals -> uses this ```````
console.log(`Name: ${fName} ${lName}, age: ${calcAge(yob)}`);

//methods in strings
const name = `${fName} ${lName}`;
console.log(name.startsWith('s'));
console.log(name.startsWith('S'));
console.log(name.endsWith('e'));
console.log(name.includes('x'));
console.log(`${fName} `.repeat(3));

/********************* Arrow Functions **********************/

const years = [1999, 1965, 1934, 1996];

//ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `age element ${index + 1}: ${age}`;
});
console.log(ages6);


//This keyword in arrows

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'this is box no ' + this.position + 'and it is ' + this.color;
            alert(str);
        });
    }
}
//box5.clickMe(); // wont work and will show undefined,
// because this points to global windows var

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `this is box no ${this.position} and color is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();// arrow function uses lexical this( of its parent proto i think)


function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 =
    function (friends) {
        var arr = friends.map(function (el) {
                return this.name + ' oof ' + el;
            }.bind(this)
        );
        console.log(arr);
    }

var friends5 = ['a', 'b', 'c'];
new Person('name').myFriends5(friends5);

//wont show name(this.name) because "this" here is inner anon. function
//bind makes a new copy of the outer function to solve the problem

//ES6
Person.prototype.myFriends6 =
    function (friends) {
        const arr = friends.map(el => `${this.name} oof ${el}`);
        console.log(arr);
    }
let friends6 = ['a', 'b', 'c'];
new Person('name').myFriends6(friends6);

//gets lexical this from our function and works





