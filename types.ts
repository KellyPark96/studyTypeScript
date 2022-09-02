/* 
static types
dynamic types => runtime 때 type을 알 수 있음.
type casing => 소문자로 표기
Primitive Type
    => Boolean / Number / String / Symbol / Null / Undefined
*/

//boolean
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000;
console.log(underscoreNum);

//string
let fullName: string = "Mark Lee";
let age: number = 39;
let sentence: string = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);

// Symbol
console.log(Symbol('foo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: "value",
};
console.log(obj[sym]);

// null & undefined
let v: void = undefined;
let union: string | null = null;
union = "Mark";


// Array : Object형

// + 

// Any, Void, Never, Unknown
// Enum
// Tuple : Object 형
