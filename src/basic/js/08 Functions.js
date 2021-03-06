function sum(x, y){
    return x + y;
  }
  
  //--------------------------
  
  const sum = function(x, y){
    return x + y;
  }
  
  //--------------------------
  
  const identity = x => x;
  
  //--------------------------
  
  const sum = (x, y) => x + y;
  
  //--------------------------
  
  const createCounter = count => ({ count });
  createCounter(0);
  
  //--------------------------
  
  const divide = (no, divisior) => {
    if(divisior === 0){
      throw 'Divsion by 0';
    }
    
    return no / divisior;
  }
  
  divide(2, 0);
  divide(2, 1);
  
  //--------------------------
  
  1 + 2
  7 - 3 - 1
  null === undefined
  null || 0
  !false
  
  //--------------------------
  
  Math.pow(2, 3)
  1 + Math.max(1, 3)
  
  //--------------------------
  
  const max = (a, b) => a > b ? a : b;
  max(1, 2);
  
  //--------------------------
  
  function sum(x, y){
    return x + y;
  }
  
  sum(1, 2);
  
  //--------------------------
  
  const total = sum(1, 2, 3);
  
  //--------------------------
  
  const total = sum(1);
  
  //--------------------------
  
  function doSomething(...arr) {
    console.log(arr);
  }
  
  doSomething(1, 2, 3);
  
  //--------------------------
  
  function doSomething(a, b, ...arr) {
    console.log(a);
    console.log(b);
    console.log(arr);
  }
  
  doSomething(1, 2, 3, 4, 5);
  
  //--------------------------
  
  function sum(x, y){
    return x + y;
  }
  
  sum(1, 2);
  
  //--------------------------
  
  (() => {
    console.log('App has started');
  })();
  
  //--------------------------
  
  (function(){
    console.log('App has started');
  })();
  
  //--------------------------
  
  !function(){
    console.log('App has started');
  }();
  
  //--------------------------
  
  const counter = {
    count : 0,
    increment(){
      this.count += 1;
      return this.count;
    }
  }
  
  counter.increment();
  counter.increment();
  counter.increment();
  
  const increment = counter.increment;
  increment();
  
  //--------------------------
  
  function Counter(){
    this.count = 0;
  }
  
  Counter.prototype.increment = function(){
    this.count += 1;
    return this.count;
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();
  
  //--------------------------
  
  class Counter{
    constructor(){
      this.count = 0;
    }
    
    increment(){
      this.count += 1;
      return this.count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();
  
  //--------------------------
  
  function sum(x, y){
    return x + y;
  }
  
  sum.apply(null, [1, 2]);
  
  sum.call(null, 1, 2);
  
  //--------------------------
  
  'use strict';
  
  function increment(){
    this.count += 1;
    return this.count;
  }
  
  increment();
  
  //--------------------------
  
  const counter = {
    count: 1
  }
  
  increment.call(counter);
  increment.apply(counter);
  
  //--------------------------
  
  function countDown(number) {
     console.log(number);
  
     if (number > 0) {
       countDown(number - 1);
     }
  }
  
  countDown(3);
  
  //--------------------------
  
  function isEvent(n) {
    return n % 2 === 0;
  }
  
  const numbers = [1, 2, 3, 4];
  const evenNumbers = numbers.filter(isEvent);
  
  console.log(evenNumbers);
  
  //--------------------------
  
  function getEmptyObject() {
    return {};
  }
  
  //--------------------------
  
  function createFunction(x){
    return function(){};
  }