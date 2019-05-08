// 可选参数， 默认参数
// 使用 ？ 使参数变成可选的
// 使用扩展运算符，设置无限参数
function buildName(firstName: string = 'Bob', lastName?: string): string {
    return firstName + ' ' + lastName;
};

let result1 = buildName('Bob');
// let result2 = buildName('Bob', 'Adams', 'Sr.');
let result3 = buildName('Bob', 'Adams');


// 剩余参数
function fun(firstName: string, ...restOfName: string[]): string {
    return firstName;
};

let buildNameFn: (fname: string, ...reset: string[]) => string = buildName;