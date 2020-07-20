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




