function a() {
     // public 公共
    class Animal {
        private name: string

        constructor(name: string) {
            this.name = name;
        }

        public move(distance: number = 0) {
            console.log(`${this.name} moved ${distance}m`);
        }
    };

    class Rhino extends Animal {
        constructor() {
            super('Rhino');
        }
    };

    class Employee {
        private name: string
        constructor(name: string) {
            this.name = name;
        }
    };

    let animal = new Animal('Goat');
    let rhino = new Rhino();
    let employee = new Employee('Bob');

    // animal = rhino // 正确
    // animal = employee // 错误
};
a();

function b() {
    class Person {
        protected name: string // 受保护成员

        protected constructor(name: string) { // 受保护的，只能在派生类中访问
            this.name = name;
        }
    };

    class Employee extends Person {
        private department: string

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        getElevgtorPitch() {
            return `Hello, my name is ${this.name} and I wol in ${this.department}`;
        }
    };

    let howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevgtorPitch());
    // console.log(howard.name);
};
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


    class Person { // 等价于上述
        constructor(readonly name: string) {
            this.name = name;
        }
    };

    let john = new Person('John');
};
c();

function d() {
    // 存取器
    let passcode = 'secret passcode';

    class Employee {
        private _fullName: string
        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if(passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }else {
                console.log('Error: Unauthorized update of employee!');
            };
        }
    };

    let employee = new Employee();
    employee.fullName = 'Bob Smith';
    if(employee.fullName) {
        console.log(employee.fullName);
    };
};
d();
