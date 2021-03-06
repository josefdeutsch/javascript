const set = new Set([1, 2, 3]);

//-----------------------

const set = new Set();

//-----------------------

const set = new Set('Hello');

//-----------------------

const set = new Set(['A', 'B', 'C']);
set.size;

//-----------------------

const set = new Set();
set.add('Red');
set.add('Blue');

console.log(set);

set.delete('Blue');

//-----------------------

const set = new Set();
set.add('A');
set.add('A');

//-----------------------

const set = new Set();
set.add(1);
set.add('1');

//-----------------------

const arr = [1, 2, 1, 3]
const set = new Set(arr);

const newArr = Array.from(set);

//-----------------------

const newArr = [...new Set([1, 2, 1, 3])];

//-----------------------

const set = new Set([
 { value : 1},
 { value : 1}
]);

set.size;

//-----------------------

const set = new Set(['A', 'B', 'B', 'C']);
set.forEach(v => {
 console.log(v)
});

//-----------------------

const map = new Map([
  ['Yes', 'Si'],
  ['No', 'No']
]);

map.get('Yes')

//-----------------------

const map = new Map();

const obj = {
  'Good Morning': 'Buongiorno',
  'Good Evening': 'Buonasera '
}

const entries = Object.entries(obj);

const map = new Map(entries);

new Map(Object.entries(obj));

//-----------------------

const map = new Map();
map.set('Hello', 'Ciao');

map.has('Hello')

map.has('Hi')

//-----------------------

const map = new Map([
  ['Hello', 'Ciao'],
  ['Hi', 'Ciao']
]);

map.delete('Hi');

map.clear();

//-----------------------

const map = new Map([
  ['Apple', 'Mela'],
  ['Pear', 'Pera']
]);

map.size

//-----------------------

const map = new Map();
map.set(true, 'vero');
map.set(false, 'falso')

map.get(true);

//-----------------------

const map = new Map([
  ['Lemon', 'Limone'],
  ['Orange', 'Arancia'] 
]);

[...map.keys()]

//[...map.values()]

//[...map.entries()]

map.forEach((value, key) => {
 console.log(`${key}:${value}`)
})