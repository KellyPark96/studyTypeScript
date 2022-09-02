"use strict";
/*
static types
dynamic types => runtime 때 type을 알 수 있음.
type casing => 소문자로 표기
Primitive Type
    => Boolean / Number / String / Symbol / Null / Undefined
*/
//boolean
let isDone = false;
isDone = true;
console.log(typeof isDone);
//number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let notANumber = NaN;
let underscoreNum = 1000000;
console.log(underscoreNum);
//string
let fullName = "Mark Lee";
let age = 39;
let sentence = `Hello, My name is ${fullName}.
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
let v = undefined;
let union = null;
union = "Mark";
// Array : Object형
// + 
// Any, Void, Never, Unknown
// Enum
// Tuple : Object 형
