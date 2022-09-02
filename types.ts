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


// Array
let list: (number | string)[] = [1, 2, 3, "4"]; // => union type도 가능
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 39];
const person: [string, number] = ["Mark", 39];
const [first, second] = person;

// Any
// 어떤 타입이어도 상관없는 타입.
// 이걸 최대한 쓰지 않는게 핵심
// 왜냐하면 compile time에 type check가 정상적으로 이루어지지 않기 때문.
// 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지않으면 오류를 뱉도록 하는 옵션도 있음 => noImplictAny.
function returnAny(message: any): any {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString();
let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({ num: 0 });
c.indexOf("0");

// Void, Never, Unknown
// Enum