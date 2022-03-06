typeof false
typeof true

//---------------------

1 === 1
1 !== 2 

//---------------------

let value = true;
console.log(value ? 'True' : 'False');

//---------------------

 value = '';
console.log(value ? 'Truthy' : 'Falsy');

//---------------------

!true
!undefined
!null
!0
!1
!{}
![]
!''
!'text'

//---------------------

 value = null;
const isNullish = value === null || value === undefined;

//---------------------

 value = 1;
const isNotNullish = value !== null && value !== undefined;

//---------------------

const a = null
const b = null

!(a || b) === !a && !b;
!(a && b) === !a || !b;


//---------------------

Boolean(undefined);
Boolean(null);
Boolean(0);
Boolean(1);
Boolean({});
Boolean([]);
Boolean('');
Boolean('text');

//---------------------

!!undefined
!!null
!!0
!!1
!!{}
!![]
!!''