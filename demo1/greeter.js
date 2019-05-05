// 类型注解
// 参数必须为字符串类型,并且只能传一个参数
// 如果参数不为字符串，程序可以编译成功，但是会抛出错误。
// function greeter(person: string) {
//     return 'Hello ' + person;
// };
// let user = 'word';
// console.log(greeter(user));
// 定义一个接口
// interface Person {
//     firstName: string
//     lastNmae: string
// };
// function greeter(person: Person) {
//     return 'Hello ' + person.firstName + ' ' + person.lastNmae;
// };
// let user:Person = {
//     firstName: 'word',
//     lastNmae: '你好世界'
// };
// console.log(greeter(user));
// 定义一个类
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastNmae = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
;
var user = new User('hello', 'Huang');
