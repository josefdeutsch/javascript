const sum = (x, y) => x + y;

sum.name;
typeof sum.name;

//--------------------------

function sum(x, y){
  return x + y;
}

sum.name;
typeof sum.name;

//--------------------------

max(1,2); //2

function max(x, y){
  return x > y ? x : y; 
}

//--------------------------

max(1,2);

const max = (x, y) => x > y ? x : y;

//--------------------------

(() => {
  console.log('app started');
})();

//--------------------------

(function(){
  console.log('app started');
})();

//--------------------------

const message = { //You no longer need to specify the function keyword when defining functions inside objects.
  msg: 'Hi!',
  show(){
    const logMsg = () => {
      console.log(this.msg);
    }
    
    logMsg();
  }
}

message.show();

//--------------------------

const message = {
  msg: 'Hi!',
  show(){
    function logMsg(){
      console.log(this.msg);
    }
    
    logMsg();
  }
}

message.show();

//--------------------------

'use strict';

const counter = {
  count: 0,
  increment: ()=> { 
    this.count += 1; 
    return this.count;
  },
  decrement: ()=> { 
    this.count += 1; 
    return this.count; 
  }
}

counter.increment();
counter.increment();
counter.increment();

//--------------------------

const counter = {
  count: 0,
  increment: function(){ 
    this.count += 1; 
    return this.count; 
  },
  decrement: function(){ 
    this.count += 1; 
    return this.count; 
  }
}

counter.increment();
counter.increment();
counter.increment();

//--------------------------

const counter = {
  count: 0,
  increment(){ 
    this.count += 1; 
    return this.count; 
  },
  decrement(){ 
    this.count += 1; 
    return this.count; 
  }
}

//--------------------------

function Todo(){}
const todo = new Todo();

//--------------------------

const Todo = () => {}
const todo = new Todo();