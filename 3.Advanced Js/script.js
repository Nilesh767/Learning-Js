// Function Constructor

var neo = {
    name: 'nilesh',
    yearOfBirth: 1999,
    job: 'student'
};
console.log(typeof neo);
console.log(neo);

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calAge = function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lname = 'some sname';

var neo = new Person('nilesh', 1999, 'student');
var abc = new Person('abc', 2000, 'some job');
var xyz = new Person('xyz', 1998, 'some bla bla job')

console.log(typeof neo);

console.log(neo);
console.log(abc);
console.log(xyz);

neo.calAge();
abc.calAge();
xyz.calAge();

console.log(neo.lname);
console.log(abc.lname);
console.log(xyz.lname);

//git pushed

//Object.create Method to create objects

var personProto = {
    calAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
}

var neo = Object.create(personProto);
neo.name = 'nilesh';
neo.yearOfBirth = 1999;
neo.job = 'student';
console.log(neo);

var someone = Object.create(personProto, {
    name: {value: 'some name'},
    yearOfBirth: { value: 1999},
    job: { value: 'some job'}
})
console.log(someone);

//git pushed

//primitive vs objects
//primitive -> string, number, boolean, undefined, null

//object -> arrays, etc(everything except primitive)


//primitive
var a = 5; //stored at a
var b = a; //b will hold value of a
a = 555;//update a
console.log(a);
console.log(b);
// primitive variable hold value in themselves


//object
var obj1 = {
    name: 'a',
    some: 1
};//stores a

var obj2 = obj1;// stores a into b

obj1.some = 3;//change a

console.log(obj1.some);//obj1 -> got updates
console.log(obj2.some);//obj2 -> this had a
//object variables hold the reference of the location where the object is stored


//functions

var age = 3;
var obj = {
    name: 'some',
    city: 'some'
};

function change(a,b){
    a=3;
    b.city = 'bla';
}

change(age, obj);
console.log(age);
console.log(obj.city);


//git pushed

//passing function as an arguement

var years = [1999, 1998, 1997, 2005, 1995];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for( var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el>=18;
}

function maxHB(el) {
    if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 *el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHB);

console.log(ages);
console.log(fullAges);
console.log(rates);

//git pushed

// immediately invoked function expressions(IIFE)

function game(){
    var score = Math.random() * 10;
    console.log(score>=5);
}
game();

( function (){
    var score = Math.random() * 10;
    console.log(score>=5);
})();

//git pushed

//closures

function retirement(retirementAge){
    var a = ' years left';
    return function(yearOfBIrth) {
        var age = 2020 - yearOfBIrth;
        console.log((retirementAge - age) + a);
    }
}

var retireIndia = retirement(60);
var retirementUs = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retireIndia(1999);
retirementUs(1999);
retirementGermany(1999);
retirementIceland(1999);


//retirement(66)(1999);

 function interviewQuestion(job) {
     return function(name) {
        if( job == 'designer') {
                console.log(name, 'is ', job);
        } else if( job == 'teacher') {
               console.log(name, 'is ', job);
        } else {
              console.log(name, 'is jobless');
        }
    }
 }

 var something = interviewQuestion('');
 something("nilesh");
 interviewQuestion('')('neo');

