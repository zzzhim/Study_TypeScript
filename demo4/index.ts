// 接口
// 使用 interface 来定义一个接口，接口的首字母通常是大写的
interface LabelledValue {
    label: string
};

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
};

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);




// 可选属性
interface Square {
    color: string,
    area: number
};

interface SquareConfig {
    color?: string, // 添加 ? 表示属性是一个可选的，可以存在也可以不存在
    width?: number,
    [propName: string]: any // SquareConfig 可以有任何数量的类型
};

// 该函数的参数是 SquareConfig ，而它的返回值则是 Square
function createSquare(config: SquareConfig): Square {
    let newSquare = { color: 'white', area: 100 };

    if(config.color) {
        newSquare.color = config.color;
    };

    if(config.width) {
        newSquare.area = config.width * config.width;
    };

    return newSquare;
};
 
let mySquare = createSquare({ color: 'black' });


// 只读属性
interface Point {
    readonly x: number
    readonly y: number
};

let p1: Point = { x: 10, y: 20 };

let arr: number[] = [ 1, 2, 3, 4 ];
let ro: ReadonlyArray<number> = arr;

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
};

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
};

// 索引类型
interface StringArray {
    [ index: number ]: string // 描述索引的类型， 索引的返回值是一个字符串
};

let myArray: StringArray;
myArray = [ 'Bob', 'Fred' ];

let myStr: string = myArray[0];


class Animal {
    name: string
};

class Dog extends Animal {
    breed: string
};

interface NotOkay {
    [x: number]: Dog

    [x: string]: Animal
};

// interface NumberDictionary {
//     [index: string]: number

//     length: number
//     name: string // 字符串不能赋值给数字
// }

//  定义一个 只读的索引类型
interface ReadonlyStringArray {
    readonly [index: number]: string
};

let Arrays: ReadonlyStringArray = [ 'Alice', 'Bob' ];
// Arrays[2] = 'Mallory'; // 类型“ReadonlyStringArray”中的索引签名仅允许读取


// 只会对实例部分做检查
interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
};

class Clock implements ClockInterface {
    currentTime: Date

    constructor(h: number, m: number) {

    }

    setTime(d: Date) {
        this.currentTime = d;
    }
};

// 类的实例接口
interface ClockInterfaces {
    tick()
};
// 类的静态接口
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterfaces
};

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaces {
    return new ctor(hour, minute);
};

class DigitalClock implements ClockInterfaces {
    constructor(h: number, m: number) {

    }

    tick() {
        console.log('beep beep');
    }
};

class AnalogClock implements ClockInterfaces {
    constructor(h: number, m: number) {

    }

    tick() {
        console.log('tick toc');
    }
};
// 在传入的时候参数会在 createClock 进行判断是否符合类型
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);