console.log(typeof 1);

console.log(typeof 1.2);

console.log(Number.isInteger(1));
console.log(Number.isInteger(1.2));
console.log(Number.isInteger(''));

//----------------------

console.log(0.1 + 0.2 === 0.3);

//----------------------

9007199254740991 + 2

9007199254740991n + 2n

//----------------------

let noText = '1.2';

let no = Number(noText);

typeof no;

//----------------------

noText = '9007199254740993';

no = BigInt(noText);

typeof no;

//----------------------

const currentDate = new Date();
Number(currentDate);

//----------------------

Number(true);
Number(false);
BigInt(true);
BigInt(false);

//----------------------

Number.parseInt('1')
Number.parseInt('1.2')
Number.parseInt('1.2 3 4')
Number.parseInt(' 1.2 ')
Number.parseInt('1 one')
Number.parseInt('1one')
Number.parseInt('one')
Number.parseInt('') 

//----------------------

Number.parseFloat('1')
Number.parseFloat('1.2')
Number.parseFloat('1.2 3 4')
Number.parseFloat(' 1.2 ')
Number.parseFloat('1 one')
Number.parseFloat('one')
Number.parseFloat('')

//----------------------

Number('1')   //1
Number('1.2') //1.2
Number('1.2 3 4') //NaN
Number(' 1.2 ') //1.2
Number('1 one') //NaN
Number('one')   //NaN
Number('')      //0

//----------------------

let x = 1.23456;
x.toFixed(2);

//----------------------

(1.2).toLocaleString('en-US');

(1.2).toLocaleString('fr-FR');

//----------------------

Math.floor(1.3)
Math.floor(1.9)

Math.ceil(1.3)
Math.ceil(1.9)

Math.trunc(1.3)
Math.trunc(1.9)
Math.trunc(-1.3)
Math.trunc(-1.9)

Math.min(1,2)
Math.min(5,4,3,2,1)
Math.max(1,2)
Math.max(5,4,3,2,1)

Math.random()

//----------------------

Number(null);
Number(undefined);
Number('one');
Number('2 one');
Number(undefined);

//----------------------

Number.parseInt('');
Number.parseInt('one');
Number.parseInt('one1');
Number.parseFloat('two');

//----------------------

1 - 'one'
1 + undefined
1 * NaN

//----------------------

Number.parseInt('');
Number.parseInt('one');
Number.parseInt('one1');
Number.parseFloat('two');

//----------------------

Math.sqrt(-1) 
0/0 
1 - 'one'
1 + undefined
1 * NaN

//----------------------

isNaN(0);
isNaN(undefined);
isNaN('one');

Number.isNaN(0);         
Number.isNaN(undefined); 
Number.isNaN('one');     