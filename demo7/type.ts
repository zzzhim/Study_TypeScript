// 泛型 - 基本示例 + 使用泛型变量 + 泛型类型

// function identity<T>(arg: T): T {
//     return arg;
// };

// // 我们明确指明我们传入的参数类型
// // let output = identity<string>('myString');

// // 编译器会根据我们传入的参数自动帮我们确定类型
// // 类型推断，可以帮助我们进行代码精简和可读性
// let output = identity('myString');


function identity<T>(arg: T): T {
    return arg;
};

// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// };

interface GnericIdentityFn<T> {
    <T>(arg: T): T
};

let myIdentity: GnericIdentityFn<number> = identity;