// 高级技巧
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
        ;
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
;
var greeter;
greeter = new Greeter('Word');
console.log(greeter.greet());
greeter = new Greeter();
console.log(greeter.greet());
// 取这个 Greeter 类的类型，而不是它实例的类型
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey there';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
