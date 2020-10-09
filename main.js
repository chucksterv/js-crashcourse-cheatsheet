//creates a popup
alert('Hello World'); //don't use for debugging because it blocks the rest of the script from running

//console.log('Hello world'); //prints hello world to the console log
//log is a method, console is an object

console.error('This is an error');
console.warn('This is a warning');

//var - globally scoped - shouldn't use anymore because of it
//use let and const to create variables

let age = 30;
const height = 8;
console.log(age);

//use const unless you know you're gonna reassign the variable
//use let in that case

//String, numbers, boolean, null, undefined, symbol
const name = 'John'; //string can use '' or ""
const age = 30; //number
const rating = 2.3;
const isCool = true; //bool
const x = null;
const y = undefined;
let z; // undefined can only use with let if we leave like this

console.log(typeof x); //returns the type of the variable

//Concatenation
console.log('My name is ' + name + ' and i am ' + 30);
console.log(`My name is ${name} and I am ${age}`);

//other methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,2));
console.log(name.substring(0,2).toUpperCase());
console.log(name.split(''));
const s = 'technology, computers, it, code';
console.log(s.split(', '));

//array creation method 1 using constructor
const numbers = new Array(1,2,3,4,5);

//array creation method 2
const fruits = ['apples', 'oranges', 4, true, 'pears'];
fruits[5] = 'grapes'; //added to index 5 extending array
fruits.push('mangoes'); //added to the end of the array
fruits.pop(); //removes the last item in an array
console.log(Array.isArray('hellow')); //checks the array for an element
//returns true or false

console.log(fruits.indexOf('apples')); //returns the index of an array
console.log(fruits[5]);

//object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '5- main street',
        city: 'Clayton',
        state: 'VIC'
    }

}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

const { firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }

]

console.log(todos);
console.log(todos[1].text);

//json format is used to send data and recieve data
//convert to json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loops
for(let i = 0; i < 10; i++)
{
    console.log(`For Loop Number : ${i}`);
}

//while loops
let i = 0;
while(i < 10)
{
    console.log(`For Loop Number : ${i}`);
    i++;
}

//looping through arrays using for loop
for(let i = 0; i < todos.length; i++)
{
    console.log(todos[i]);
}

//looping through arrays for of loop. 
for(let todo of todos)
{
    console.log(todo);
}

//high order array methods
//foreach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map - returns an array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//filter - can filter out content
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//can be used in conjuction
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

//conditonals
const x = 10;
const y = 10;
// with == the variable doesn't have to match the data type
// with === the variable shoudl match the data type as well
// && and || and and or work the same as other languages
if(x === 10)
{
    console.log('x is 10');
}
else if(x > 10)
{
    console.log('x is greater than 10');
}
else
{
    console.log('x is NOT 10');
}

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//functions
//Nan means not a number
function addNums(num1, num2)
{
    console.log(num1+num2);
}

//can write default values like this
//values passed in will overwrite this
function addNums(num1=1, num2=1)
{
    console.log(num1+num2);
}

addNums(5, 4);

function addNums(num1=1, num2=1)
{
    return num1 + num2;
}

console.log(addNums(5, 4));

//Arrow functions, similar to the above function
const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums(2,8);

//it returns by default so this returns num1 + num2
// can use with {} when there are multiple parameters
const addNums = (num1 = 1, num2 = 1) => (num1 + num2);

const addNums = num1 => num1 + 5;
console.log(addNums(3));

//OOP ES5
//Constructor function
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate an object
const person1 = new Person('John', "Doe", '1-2-1020');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//prototyping should be used for functions within objects
//since not all instances will need to use the function
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate an object
const person1 = new Person('John', "Doe", '1-2-1020');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//ES6 has classes, works the same way as above but prettier
class Person 
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() 
    {
        return this.dob.getFullYear();
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate an object
const person1 = new Person('John', "Doe", '1-2-1020');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//DOM Manipulation
console.log(document);
//selectors
//single element
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');

//can select pretty much anything, tags, id, classes, etc
//selects the first one if there are many with the same name, eg; h1
console.log(document.querySelector('.container'));


//multiple elements
console.log(document.querySelectorAll('.item'));
//there are other older methods getElementsByClassName, TagName, etc
//stick to querySelector, querySelectorAll

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


//Changing things in the dom
const ul = document.querySelector('.items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//style changes
const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//other events, click, hover, mouseout
btn.addEventListener('click', (e) => {
    e.preventDefault(); //stops the default action like submitting in this case
    console.log('click');
    console.log(e);
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

})

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '')
    {
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));

            userList.appendChild(li);

            //clear fields
            nameInput.value = '';
            emailInput.value = '';
    }
}
