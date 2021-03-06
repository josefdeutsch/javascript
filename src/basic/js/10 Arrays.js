const letters = ['a', 'b', 'C'];

letters[0]

letters[1]

//------------------------------

letters[2] = 'c';

console.log(letters);

//------------------------------

const greetings = [
  'Hello',
  'Good morning',
  'Good evening'
];

{
 '0' = 'Hello',
 '1' = 'Good morning',
 '2' = 'Good evening'
}

greetings[1] === greetings['1']

typeof greetings

Array.isArray(greetings)

//------------------------------

const arr = ['A', 'B'];
console.log(arr.length)

//------------------------------

const arr = [];
arr[5] = 'F';

console.log(arr.length)

//-------------------------------

const stack = [];
stack.push('Red');     //['Red']
stack.push('Yellow');  //['Red', 'Yellow']

const color = stack.pop();
console.log(color);

console.log(stack);

//------------------------------

const collors = ['Red', 'Yellow', 'Blue'];

const firstColor = collors.shift();
console.log(firstColor);

console.log(collors);

//------------------------------

const letters = ['A', 'B', 'C']

letters.reverse();

//------------------------------

const fruits = ['Lemon', 'Apple', 'Mango'];
fruits.sort()
console.log(fruits);

//------------------------------

const numbers = [-1, -3, -2];
console.log(numbers.sort());

//------------------------------

function asc(a, b){
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
}

const numbers = [-1, -3, -2];
console.log(numbers.sort(asc));

//------------------------------

function asc(a, b){
  return a - b;
}

//------------------------------

const letters = ['A', 'B', 'C'];

letters.indexOf('A')

letters.lastIndexOf('A')

letters.includes('B')

//------------------------------

const arr = [1, 2, undefined, null, NaN, 0, 3];

const newArr = arr.filter(Boolean);

//------------------------------

const characters = [
  { value: 'A', type: 'letter'},
  { value: 'B', type: 'letter'},
  { value: '1', type: 'number'}
];

function isLetter(char){
  return char.type === 'letter';
}

const letters = characters.filter(isLetter);

//------------------------------

const firstLetter = characters.find(isLetter);

//------------------------------

const firstLetterIndex = characters.findIndex(isLetter);

//------------------------------

const hasLetters = characters.some(isLetter);

//------------------------------

const allLetters = characters.every(isLetter);
console.log(allLetters)

//------------------------------

const arr = ['1', '2', 3, '6'];

const numbers = arr.map(Number);

//------------------------------

function max(acc, value){
  return acc > value ? acc : value; 
}

const arr = [1, 5, 3, 2];

arr.reduce(max)

//------------------------------

const chars = ['A', 'B', undefined, 'C'];

function log(value, index){
 console.log(`${index}: ${value}`);
}

chars.forEach(log);

//------------------------------

const chars = ['A', 'B', undefined, 'C'];

function log(value, index){
  console.log(`${index}: ${value}`);
  return Boolean(value);
}

chars.every(log);

//------------------------------

const letters = ['A', 'B'];
const numbers = ['1', '2'];
const chars = letters.concat(numbers);
console.log(chars);

//------------------------------

const letters = ['A', 'B', 'C', 'D', 'E'];
const part = letters.slice(1, 3);
console.log(part);

//------------------------------

const clone = letters.slice();

clone === letters

//------------------------------

const part = letters.slice(1);

//------------------------------

const arr = [false, false, false, false, false];

//------------------------------

const arr = Array(5);
console.log(arr.length);

//------------------------------

const arr = [undefined, undefined, undefined];
arr.fill(false);

console.log(arr);

//------------------------------

const arr = Array(5).fill(false);

//------------------------------

const arr = Array(5).fill({});
arr[0].msg = 'Hi';

console.log(arr);

//------------------------------

const arr = Array(5).fill();

//------------------------------

const arr = Array(5).fill().map(()=>({}));
arr[0].msg = 'Hi';

console.log(arr);


//------------------------------

const arr = [1, 2, 3];
const clone = [...arr];

//------------------------------

const arr = [...Array(5)];

//------------------------------

Math.max(1, 2, 3);

const arr = [1, 2, 3];
Math.max(...arr)

//------------------------------

const arr = ['Fire', 'and', 'Blood'];
const text = arr.join(' ');

//------------------------------

const arr = ['Fire', 'and', 'Blood'];
const csv = arr.join();

//------------------------------

const arr = ['Winterfell'];
arr.join('-');