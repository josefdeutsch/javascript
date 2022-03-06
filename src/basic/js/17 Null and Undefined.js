let x;
console.log(x);

//-----------------------

const book = {};

book.title

//-----------------------

const arr = [];
console.log(arr[0]);

//-----------------------

function doSomething(x){
  console.log(x);
}

doSomething();

//-----------------------

function doSomething() {}

console.log(doSomething());

//-----------------------

function doSomething(no){
  if(no === 1){
    return;
  }
  
  return 0;
}

console.log(doSomething(1));

//-----------------------

console.log(undefined?.name);

//-----------------------

undefined ? true : false;

//-----------------------

typeof undefined

//-----------------------

let selectedBook = null;

//-----------------------

const map = Object.create(null);

//-----------------------

console.log(null?.name);

//-----------------------

typeof null

//-----------------------

const value = null;
const newValue = value ?? 'default';

//-----------------------

const value = 0;
const newValue = value ?? 'default';
console.log(newValue);

//-----------------------

const value = 0;
const newValue = value || 'default';
console.log(newValue);

//-----------------------

const exp = (null || undefined) ?? "foo";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


const book = {
    name: 'JavaScript The Good Parts',
    author: {
      name: 'Douglas Crockford'
    }
  };

console.log(book.author.name);

//-----------------------

const book = {
    name: 'How JavaScript Works'
};

console.log(book.author.name);

//-----------------------

const book = {
    name: 'JavaScript The Good Parts',
    author: {
      name: 'Douglas Crockford'
    }
  };

console.log(book.author.name);

//-----------------------

const book = {
    name: 'How JavaScript Works'
};

console.log(book.author.name);

//-----------------------

const book = {
    name: 'How JavaScript Works'
};

console.log(book.author?.name);



console.log(!!maybeNull)

if(maybeNull) { console.log("Not null") } else { console.log("Could be null") } // Could be null

for(let i = 0; null; i++) { console.log("Won't run") }

maybeNull ? console.log("truthy value") : console.log("Falsy value") 

function add(x,y){
return x+y
}
function sub(x,y){
return x-y
}

maybeNull ? console.log(add(4,5)) : console.log(sub(5,4)) 