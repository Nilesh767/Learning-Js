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






















