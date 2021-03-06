const text = 'ABC';
const arr = Array.from(text);
arr.join('') === text

//--------------------------

const text = 'ABð';
word.length

//--------------------------

['A', 'B', 'ð'].length

//--------------------------

const text = 'ABC';
const char = text[0];

//--------------------------

const text = 'ABC';
text[0] = 'D';

//--------------------------

const arr = ['A', 'B', 'C'];
arr[0] = 'D';

//--------------------------

const text = 'ðA'
console.log(text[0]);
console.log(text[1]);

//--------------------------

const arr = ['ð', 'A'];
console.log(arr[0]);
console.log(arr[1]);

//--------------------------

'ABC' === 'ABC'

['A', 'B', 'C'] === ['A', 'B', 'C']

//--------------------------

const text = 'Fly High';
const firstIndex = text.indexOf('High');

//--------------------------

const arr = ['F', 'l', 'y', ' ', 'H', 'i', 'g', 'h'];
const firstIndex = arr.indexOf('l');

//--------------------------

const text = 'ABCDE';
const arr = ['A', 'B', 'C', 'D', 'E'];

console.log(text.slice(1, 3));

arr.slice(1, 3); 

//--------------------------

'A'.concat('BC')
'A'.concat('BC', 'DE');

//--------------------------

['A'].concat(['B', 'C'])

['A'].concat(['B', 'C'], ['D', 'E'])

//--------------------------

for (const char of 'ABC') {
  console.log(char);
}

//--------------------------

for (const char of 'Að') {
  console.log(char);
}

//--------------------------

const text = 'Að';
for (let i = 0; i < text.length; i++){
  console.log(text[i])
}

//--------------------------

const arr = ['A', 'ð'];

for (const char of arr) {
  console.log(char);
}

for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

//--------------------------

const [first, second] = ['A', 'B', 'C'];
console.log(first);
console.log(second);

//--------------------------

const [first, second] = 'ABC';
console.log(first);
console.log(second);

//--------------------------

const [first, second] = 'ðHi!'
console.log(first);
console.log(second);