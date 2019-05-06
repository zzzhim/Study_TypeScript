var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function a() {
    // var 声明
    function f() {
        var message = 'Hello World';
        return message;
    }
    ;
    function fun(shouldInitialize) {
        if (shouldInitialize) {
            var x = 10;
        }
        return x;
    }
    ;
    fun(true); // 返回 10
    fun(false); // 返回 undefined
    function sumMatrix(matrix) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var j = 0; j < currentRow.length; j++) {
                sum += currentRow[i];
            }
            ;
        }
        ;
        return sum;
    }
    ;
    var matrix = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    console.log(sumMatrix(matrix));
}
;
a();
function b() {
    // let 声明
    // let 在当前作用域下是不能够重新定义的
    var hello = 'Hello';
    function f(input) {
        var a = 100;
        if (input) {
            var b_1 = a + 1;
            return b_1;
        }
        ;
        return b;
    }
    ;
    f(false);
    // 暂时性死区
    // a++; // 在声明之前不可使用
    var a = 1;
}
;
b();
function c() {
    // const 声明的基本类型是不可以更改的
    var numLivesForCat = 9;
    // 但是 const 的复杂类型是可以更改的
}
;
c();
function d() {
    // 数组解构赋值
    var input = [1, 2];
    function f(_a) {
        var fisrt = _a[0], second = _a[1];
        console.log(fisrt);
        console.log(second);
    }
    ;
    f(input);
    var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
    console.log(first);
    console.log(rest);
    var _b = [1, 2, 3, 4], second = _b[1], fourth = _b[3];
    console.log(second);
    console.log(fourth);
    // 对象解构赋值
    var o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };
    var a = o.a, passthrough = __rest(o, ["a"]);
    var total = passthrough.b + passthrough.c.length;
    console.log(a);
    console.log(total);
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    ;
    function fun(_a) {
        var _b = _a === void 0 ? { a: '1' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 2 : _c;
    }
    ;
    fun({ a: 'yes' });
    // 展开
    var k = [1, 2];
    var l = [3, 4];
    var bothPlus = [0].concat(k, l, [5]);
    console.log(bothPlus);
    var defauts = {
        food: 'spicy',
        price: '$10',
        ambiance: 'noisy'
    };
    var search = __assign({}, defauts, { food: 'rich' });
    console.log(search);
}
;
d();
