// // 抽象类
// abstract class Animal {
//     abstract makeSound(): void
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
//     moveBy(): void {
//         console.log('roaming the earth...');
//     }
// };
// 抽象类
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name ' + this.name);
    };
    return Department;
}());
;
// 派生类
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.genterateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
;
var department;
// department = new Department(); // 抽象类是无法进行实例化的
department = new AccountingDepartment(); // 但是它的派生类是可以实例化的
department.printName();
department.printMeeting();
// 因为我们声明的是 Department 的类型，所以 genterateReports 方法是不存在 Department 上的.
// department.genterateReports();
