'use strict';
const obj = Object.freeze({});

obj.msg = 'Hi';

//-------------------------

const obj = null;
const name = obj.name;

//-------------------------

const text = `Name: ${name}`;
console.log(name);

//-------------------------

throw 'This is an error'

throw 1

throw { code : 1, message: 'User not authorized' }

throw new Error('This was an error')

//-------------------------

function divide(no, divisor){
  if(divisor === 0){
    throw new Error('Division by zero error')
  }
  
  return no / divisor;
}

divide(1, 0);

//-------------------------

'use strict';

try {
  let text ='aBC';
  text[0] = 'A';
} 
catch(e){
  const { message } = e
  console.log(message)
}

//-------------------------

JSON.parse('');

//------ -------------------

function isValidJSON(text){
  try {
    JSON.parse(text);
    return true;
  } 
  catch(e) {
    return false; 
  }
}

console.log(isValidJSON(''));

console.log(isValidJSON('{}'));

//-------------------------

function process(){
  throw new Error('Could not transform');
}

try {
  process();
}
catch(e){
  const errorMessage = `Exception: ${e.message}`;
  console.log(errorMessage);
  throw e;
}

//-------------------------

function process(){
  throw new Error('Could not transform');
}

console.time('duration');
process();
console.timeEnd('duration');

//-------------------------

function process(){
  throw new Error('Could not transform');
}

console.time('duration');
process();
console.timeEnd('duration');

//-------------------------

function process(){
  throw new Error('Could not transform');
}

console.time('duration');
try{
  process();
}
finally{  
  console.timeEnd('duration');
}