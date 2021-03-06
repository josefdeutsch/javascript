
//In JavaScript, an object is just a collection of key-value pairs. 

const movie = function(){};
movie.title = 'Toc Toc';
movie.year = 2017;
delete movie.year;

//----------------------

const Integer = function(value){ 
  return parseInt(value);
};

Integer('123');

//----------------------

Integer.isInteger = function(value){
  return value === Number.parseInt(value);
}

Integer.isInterger(123);

//----------------------

const x = function(){ return 'Hi' };
x.type = 'Greeting';

x();

x.type

//----------------------

const text = 'Hi';
text.type = 'greeting';

console.log(text.type);

//----------------------

'in bruges'.toUpperCase(); 

//----------------------

null.msg; 

undefined.length; 

//----------------------

const x = null;

x.msg = 'Hi';

//----------------------

typeof(null);

//----------------------

Number('1')

String(1)

Boolean(0)

//----------------------

const no = 1;
typeof no

//----------------------

const noObj = new Number(1);
typeof noObj

noObj.valueOf() === no

//----------------------

const a = 1;
const b = a;

//----------------------

const a = { value: 1};
const b = a;

a.value = 2;
console.log(b.value)

//----------------------

function changeTo(value, newValue){
  value = newValue;
}

const a = 1;
changeTo(a, 2);

console.log(a);

//----------------------

function changeTo(obj, newValue){
  obj.value = newValue;
}

const a = {value : 1};
changeTo(a, 2);

console.log(a);

const obj1 = {};
const obj2 = obj1;

obj1 === obj2

//----------------------

'use strict';

const text = 'ABC';
text[0] = 'a';

//----------------------

const arr = ['A', 'B', 'C'];
arr[0] = 'a';