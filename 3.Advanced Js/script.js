// Function Constructor

/*

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

*/
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


