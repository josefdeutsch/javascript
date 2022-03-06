console.log('Text' === 'Text')

//----------------

String(0)
String(true)
String(null)
String(undefined)
String([1,2,3])
String({ msg: 'Hi'})
String(Symbol('id'))

//----------------

new String(' text ').trim();

//----------------

let text = ' \t\ntext\n\t ';
const newText = text.trim();

//----------------

const str = 'abc';
const newStr = str.replace('a', 'A');
console.log(str);
console.log(newStr)

//----------------

text = 'ABC';
text[0] = 'X';

//----------------

let quote = 'Here we stand';
const firstIndex = quote.indexOf(' ');

//----------------

quote = 'Here we stand';
const lastIndex = quote.lastIndexOf(' ');

//----------------

quote = 'First in Battle';
quote.startsWith('First')

//----------------

quote = 'We Remember';
quote.endsWith('We')

//----------------

quote = 'Our Blades are Sharp';
quote.includes('are')

//----------------

quote = 'Winter is coming';
const part1 = quote.substr(0, 6);
const part2 = quote.substr(10, 6);

//----------------

quote = 'Winter is coming';
let part = quote.substr(6);

//----------------

quote = 'We Stand Together';
part = quote.substring(3, 8);

//----------------

quote = 'We Stand Together';
part = quote.substring(3);

//----------------

quote = 'You know nothing,Jon Snow';
const commaIndex = quote.indexOf(',');
part = quote.substring(commaIndex + 1);

//----------------

'A' + ' ' + 'text'
1 + '2'

//----------------

'A'.concat('B')
'A'.concat(' ', 'text')
'1'.concat(2)

//----------------

quote = 'Winter is coming';
const words = quote.split(' ');

//----------------

const csv = 'Fire,and,Blood';
let arr = csv.split(',');

//----------------

 arr = ['Fire', 'and', 'Blood'];
 text = arr.join();

//----------------

arr = ['Fire', 'and', 'Blood'];
 text = arr.join(' ');

//----------------

let word = 'Awake';
`${word}! ${word}!`

//----------------

 word = 'Hi';
console.log(word.length)

//----------------

 word = 'Hi🙂';
console.log(word.length)

//----------------

 word = 'Hi';
console.log(word.charAt(0))

//----------------

 word = 'Hi🙂';
console.log(word.charAt(2))

//----------------

 word = 'Hi🙂';
let chars = word.split('');

//----------------

 word = 'Hi🙂';
 chars = Array.from(word);

console.log(word.length);
console.log(chars.length);
console.log(chars[2]);
