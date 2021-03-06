globalThis.hasOwnProperty('NaN')  

globalThis.hasOwnProperty('Number')  

globalThis.hasOwnProperty('setTimeout')  

globalThis.hasOwnProperty('Math')  

//-------------------------------

var numberArr = [1, 2, 3];
console.log(globalThis.numberArr);

//-------------------------------

const numberArr = [1, 2, 3];

console.log(globalThis.numberArr);

console.log(globalThis.hasOwnProperty('numberArr'));

//-------------------------------

globalThis.numberArr = [1, 2, 3];
console.log(numberArr);

//-------------------------------
//https://www.youtube.com/watch?v=Jqn_wjkSZwo

const add_todo = 'add_todo';
const remove_todo = 'remove_todo';

export { add_todo, remove_todo };

//-------------------------------

import { add_todo, remove_todo } from './actions';

console.log(add_todo);

//-------------------------------

import { add_todo as addTodo } from './actions';

console.log(addTodo);

//-------------------------------

import * as actions from './actions';

console.log(actions.add_todo);

//-------------------------------

function square(x) {
  return x * x;
}

export default square;

//-------------------------------

import computeSquare from './square';

computeSquare(3); 

//-------------------------------

function doTask(){
  let x = 1;
  console.log(x);
}

doTask();

console.log(x);

//-------------------------------

{
  const x = 1;
}

console.log(x); 

//-------------------------------

function outer(){
  const x = 1;
  
  function inner(){
    console.log(x);
  }
  
  inner();
}

outer();

//-------------------------------

function secondOuter(){
  const x = 1;
  
  function firstOuter(){
    function inner(){
      console.log(x);
    }
    inner();
  }
  firstOuter();
}

secondOuter();

//-------------------------------

{
  const x = 1; 
  {
    {
     console.log(x);
    }
  }
}

//-------------------------------

{
  const x = 1;
  
  setTimeout(function inner(){
    console.log(x);
  }, 10000);
}

//-------------------------------

function doSomething() {
  x = 1;
}

doSomething();
console.log(x);

//-------------------------------

'use strict';
function doSomething() {
  x = 1;
}

doSomething();

//-------------------------------

function doSomething() {
 'use strict';
  x = 1;
}

function doSomethingElse() {
  y = 1;
}

doSomethingElse();
console.log(y);

doSomething();

//-------------------------------

'use strict';

const obj = Object.freeze({});
obj.value = 1;