// // 抽象类
// abstract class Animal {
//     abstract makeSound(): void

//     moveBy(): void {
//         console.log('roaming the earth...');
//     }
// };

// 抽象类
abstract class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    printName(): void {
        console.log('Department name ' + this.name);
    }

    abstract printMeeting(): void
};

// 派生类
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting ad Auditing');
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am');
    }

    genterateReports(): void {
        console.log('Generating accounting reports...');
    }
};

let department: Department;
// department = new Department(); // 抽象类是无法进行实例化的
department = new AccountingDepartment(); // 但是它的派生类是可以实例化的
department.printName();
department.printMeeting();
// 因为我们声明的是 Department 的类型，所以 genterateReports 方法是不存在 Department 上的.
// department.genterateReports();
