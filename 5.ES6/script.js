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










