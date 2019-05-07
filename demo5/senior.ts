// 高级技巧
class Greeter {
    static standardGreeting = 'Hello, there'

    greeting: string

    constructor(message?: string) {
        this.greeting = message
    }

    greet() {
        if(this.greeting) {
            return 'Hello, ' + this.greeting;
        }else {
            return Greeter.standardGreeting;
        };
    }
};

let greeter: Greeter;
greeter = new Greeter('Word');
console.log(greeter.greet());
greeter = new Greeter();
console.log(greeter.greet());

// 取这个 Greeter 类的类型，而不是它实例的类型
let greeterMaker: typeof Greeter = Greeter;
// 修改它的静态属性
greeterMaker.standardGreeting = 'Hey there';

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());


// 也可以把类当作接口使用
class Point {
    x: number
    y: number
};

interface Poinit3d extends Point {
    z: number
};

let point3d: Poinit3d = { x: 1, y: 2, z: 3 };