var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function a() {
    // public 公共
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " moved " + distance + "m");
        };
        return Animal;
    }());
    ;
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, 'Rhino') || this;
        }
        return Rhino;
    }(Animal));
    ;
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    ;
    var animal = new Animal('Goat');
    var rhino = new Rhino();
    var employee = new Employee('Bob');
    // animal = rhino // 正确
    // animal = employee // 错误
}
;
a();
function b() {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    ;
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevgtorPitch = function () {
            return "Hello, my name is " + this.name + " and I wol in " + this.department;
        };
        return Employee;
    }(Person));
    ;
    var howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevgtorPitch());
    // console.log(howard.name);
}
;
b();
function c() {
    // class Person {
    //     readonly name: string // 只读的
    //     constructor(name: string) {
    //         this.name = name;
    //     }
    // };
    // let john = new Person('John');
    // // john.name = '' // 报错 只能读取,不能修改
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.name = name;
        }
        return Person;
    }());
    ;
    var john = new Person('John');
}
;
c();
function d() {
    var passcode = 'secret passcode1';
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode === 'secret passcode') {
                    this._fullName = newName;
                }
                else {
                    console.log('Error: Unauthorized update of employee!');
                }
                ;
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    ;
    var employee = new Employee();
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    ;
}
;
d();
