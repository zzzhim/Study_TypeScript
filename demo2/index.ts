// 声明一个布尔值
let isDone: boolean = false;

// 声明一个number
let decLiteral: number = 20;
// 声明一个16进制的数字
let hexLiteral: number = 0x14;
// 声明一个二进制
let binaryLiteral: number = 0b10100;
// 声明一个八进制
let octalLiteral: number = 0o24;

// 声明一个字符串
// 在 Ts 中字符串既可以用单引号表示,也可以用双引号来表示
let str: string = 'bob';
str = 'smith';
// 在 Ts 中也支持模板字符串的写法
let age: number = 30;
let sentence = `
    Hello, my name is ${str}.
    I'll be ${age + 1} year old next month.
`;

// 声明一个数组
let list: number[] = [ 1, 2, 3 ]; // 声明一个所有元素都为 number 的数组

let arr: Array<number> = [ 1, 2, 3 ]; // 使用数组泛型,声明一个所有元素都为 number 的数组

// 声明一个元组
let x: [ string, number ]; // 该元组的第一个值为字符串，第二个值为数字
x = [ 'hello', 10 ]; // 类型正确
// x= [ 10, 'hello' ]; // 类型错误，抛错

// console.log(x[0].substr(1)); // string 的原型有 substr 方法，正常
// console.log(x[1].substr(1)); // number 的原型没有 substr 方法，抛错

// 枚举类型
// 枚举类型的编号默认是从 0 开始的
// 编号是可以修改的
enum Color {
    Red,
    Green = 3,
    Blue
};

let color: Color = Color.Green;
let colorName: string = Color[4];

console.log(colorName);

// 声明一个 any 类型
// any 会跳过类型检查
let notSure: any = 4;
notSure = 'maybe astring instrad';
notSure = false;

let listArr: any[] = [ 1, true, 'free' ];

// void
// 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void

function warnUser(): void {
    console.log('This i my waring message')
};

// 通常我们去声明一个 void 是没有任何意义的
// let unusable: void = undefined;
// let unusable: void = null;

// null 和 undefined
// TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大
let u: undefined = undefined;
let n: null = null;
n = undefined;
u = null;

// never 类型
// never 类型表示的是那些永不存在的值的类型

function error(message: string): never {
    throw new Error(message);
};

function fail() {
    return error('something failed');
};

function inifiniteLoop(): never {
    while(true) {

    };
};

// object
// object 表示非原始类型，也就是除 number，string，boolean，symbol，null或undefined 之外的类型。
declare function create(o: object | null): void;

// 正确
create({ prop: 0 });
create(null);
// 错误
// create(42);
// create('111');
// create(false);

// 类型断言

//  其一是“尖括号”语法
// let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length

// 另一个为 as 语法
// 在 jsx 语法中只能使用 as 语法
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length