// 命名函数
function add(x: number, y: number): number { // 为函数参数本身添加类型，并且判断它的返回值类型
    return x + y;
};

// 匿名函数
let myAdd: (x: number, y: number) => number = function (x, y) { // 匿名函数添加类型判断
    return x + y;
};

let z = 100;

function addToZ(x, y) {
    return x + y + z;
};