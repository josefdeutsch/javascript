Symbol()
Symbol('name')

//-------------------

Symbol('add_todo') === Symbol('add_todo')

//-------------------

typeof Symbol()
typeof Symbol('name')

//-------------------

const titleSym = Symbol('title')
const book = {
 [titleSym] : 'JavaScript the Good Parts' 
}

console.log(book)
console.log(book[titleSym]);

//-------------------

console.log(book.title);

console.log(book[Symbol('title')]);

//-------------------

const symbols = Object.getOwnPropertySymbols(book);
const sym = symbols[0];

console.log(book[sym]);

//-------------------

Symbol.for('name') === Symbol.for('name');

//-------------------

const nameSym = Symbol.for('name');
const key = Symbol.keyFor(nameSym);

//-------------------

const sym = Symbol('name');
const key = Symbol.keyFor(sym);

//-------------------

Number(Symbol(''))

String(Symbol())

//-------------------

'1' + Symbol()
'1'.concat(Symbol())

//-------------------

const symbol = Symbol();
symbol.toString();

//-------------------

const symbol = Symbol('add_todo');
symbol.toString();

//-------------------

const symbol = Symbol.for('add_todo');
console.log(symbol.toString());