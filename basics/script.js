/*--------------------Basic--------------------*/

console.log('Hello World!');

/*--------------------Variables--------------------*/

var fname = 'Nilesh';
console.log('fname: '+fname);
var lname = 'Choudhary';
var age = 21;
var height = 1.91;
var tall = true;
console.log('lname,age, height, is nilesh tall? '+lname + age + height + tall);
var job;
console.log(job);
job = "none";
console.log(job);

/*--------------------Basic Opertators--------------------*/

//Math Operators
var yearBorn = 2020-21
console.log('Born year: ' + yearBorn);
var currentYear,someoneBorn;
currentYear = 2020;
someoneBorn = currentYear - 22;
console.log(someoneBorn);
console.log("after 2 years: "+(currentYear + 2));

//Logical Operators
var whoElder = yearBorn < someoneBorn;
console.log('am i older? '+whoElder);

//Typeof operator
console.log(typeof whoElder);
console.log(typeof age);
console.log(typeof height);
console.log(typeof "Nilesh");
var x;
console.log(typeof x);

/*--------------------Opertator Precedence & Associativity--------------------*/

var now = 2020;
var born = 1999;
var fullAge = 18;

//Multiple Operator
var isFullAge = now - born >= fullAge;
console.log(isFullAge);

//Paranthesis
var ageSomeone = now - someoneBorn;
var ageBlaBla = 25;
var averageAge = (ageSomeone + ageBlaBla)/2;
console.log(averageAge);

//Multiple Assignment
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//Assignment Operators
x = 9;
x = x * 2;
console.log(x);
x = 9;
x *= 2;
console.log(x);

//Increment/Decrement
x = 5;
x = x + 1;
console.log(x);
x = 5;
x++;
console.log(x);

/*-------------------- If/ Else Statements--------------------*/
//if

var fname = 'Nilesh';
var age = 21;
if (age > 18) {
    console.log('Youre not Underage');
}

//if-else
if (age<18) {
    console.log('Youre underage');
} else {
    console.log('Youre not underage');
}

//if-else with boolean value
var isUnderage = false;
if (isUnderage) {
    console.log('Youre underage');
} else {
    console.log('Youre not underage');
}
//nested if-else
console.log('nested if-else ---> ');
if(age < 18){
    console.log('Youre underage');
}else if (age > 18) {
    console.log('Youre not underage');
} else {
    console.log('Wrong value');
}
//logic with if-else
console.log('logic with if-else --> ');
if(age < 18){
    console.log('Youre less then 18yo');
}else if (age > 18 && age <50) {
    console.log('Youre above 18 but less then 50');
} else if (age >50) {
    console.log('Youre above 50yo');
} else {
    console.log('Wrong value');
}
/*--------------------Ternary Operator--------------------*/

fname = 'nilesh';
age = 21;
age>=21 ? console.log('18+') : console.log('18-'); //ternary

var value = age>18 ? '18+' : '18-';// assignment + ternary
console.log(value);

/*--------------------Switch Statement--------------------*/

job = 'something';
switch(job){
    case 'teacher' : console.log('teacher');break;
    case 'something' : console.log('something');break;
    default: console.log('none');
}

//making switch like if-else
age = 21;
switch(true){
    case age < 18:
        console.log('18-');
        break;
    case age > 18 && age < 50:
        console.log('18+,50-');
        break;
    default: console.log('something age');
}

/*--------------------falsy/truthy values--------------------*/

//falsy: undefined, null, 0, '', NaN
//truhty:  all except falsy ones

var somevalue
somevalue = 0;
if(somevalue){
    console.log('defined');
} else {
    console.log('not defined or falsy');
}
console.log(typeof somevalue);

var somevalu;
if(somevalu){
    console.log('defined');
} else {
    console.log('not defined or falsy');
}
console.log(typeof somevalu);

/*--------------------equality(== or ===)--------------------*/

height = 191;
if(height == '191'){
    console.log('true');
}
if(height === '191'){
    console.log('true');
}else{
    console.log('false');
}

//git pushed
/*--------------------functions--------------------*/

function calAge(birthYear){
    return 2020-birthYear;
}

var myAge = calAge(1999);
var someAge = calAge(1998);
console.log(myAge, someAge);

//calc si
function si(principle, rate, time){
    console.log('function called');
    return (principle * rate * time) / 100;
}
var result = si(1000, 10, 1);
console.log('SI is: ' + result);

/*--------------------Function Statement and Expressions--------------------*/

// Function Expressions
job = 'some job';
fname = 'some name';

var whatDo = function(fjob, ffname){
    console.log('my name is: '+ fname+ ' and i do '+ job);
    return 'return something';
}
;
console.log('return value: ' + whatDo(job, fname));

//funtion statement -> something which doesnt return a value

//expression ->
if(true){
    console.log(23);
}
//statement, type this in "console"
if(true){console.log(23);}
//returns -> undefined

/*--------------------Arrays--------------------*/

//initialize array
var someName = ['one', 'two', 'three'];
var yearss = new Array(1990, 1969, 1999);

//print array
console.log(someName);
console.log(yearss);
console.log(someName[1]);
console.log(yearss[0]);

//change value in arrays
someName[1] = "TWO-in caps";
console.log(someName);
someName[4] = 'four';
console.log(someName);

console.log('type of array: ', typeof someName);
console.log('length of somename array: ', someName.length);

//different data types in arrays -> structure

var somethingg = ['abc', 'xyz', 1999, false];
console.log(somethingg);
console.log('type of array: ',  typeof somethingg);

console.log('push');
somethingg.push('added something');
console.log(somethingg);

console.log('pop');
somethingg.pop();
console.log(somethingg);

console.log('index of 1999');
console.log(somethingg.indexOf(1999));

console.log('index of 2000(it doesnt exist)');
console.log(somethingg.indexOf(2000));

var is2000there = somethingg.indexOf(2000) === -1 ? '2000 not there' : '2000 is there';
console.log('is 2000 there in array? ', is2000there);
somethingg.push(2000);
console.log(somethingg);
var is2000there = somethingg.indexOf(2000) === -1 ? '2000 not there' : '2000 is there';
console.log('is 2000 there in array now? ', is2000there);


