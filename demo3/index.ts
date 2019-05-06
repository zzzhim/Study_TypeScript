function a(): void {
    // var 声明
    function f() {
        var message = 'Hello World';
        return message;
    };
    
    function fun(shouldInitialize) {
        if(shouldInitialize) {
            var x = 10;
        }
    
        return x;
    };
    
    fun(true); // 返回 10
    fun(false); // 返回 undefined
    
    function sumMatrix(matrix) {
        var sum = 0;
        for(var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for(var j = 0; j < currentRow.length; j++) {
                sum += currentRow[i];
            };
        };
    
        return sum;
    };
    
    var matrix = [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ]
    ];
    
    console.log(sumMatrix(matrix));
};
a();

function b(): void {
    // let 声明
    // let 在当前作用域下是不能够重新定义的
    let hello = 'Hello';

    function f(input: boolean) {
        let a = 100;

        if(input) {
            let b = a + 1;
            return b;
        };

        return b;
    };

    f(false);

    // 暂时性死区
    // a++; // 在声明之前不可使用
    let a = 1;
};
b();

function c(): void {
    // const 声明的基本类型是不可以更改的
    const numLivesForCat = 9;

    // 但是 const 的复杂类型是可以更改的
};
c();

function d(): void {
    // 数组解构赋值
    let input: [number, number] = [ 1, 2 ];
    function f([fisrt, second]: [number, number]) {
        console.log(fisrt);
        console.log(second);
    };

    f(input);

    let [ first, ...rest ] = [ 1, 2, 3, 4 ];

    console.log(first);
    console.log(rest);

    let [ ,second, , fourth ] = [ 1, 2, 3, 4 ];

    console.log(second);
    console.log(fourth);

    // 对象解构赋值
    let o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };

    let { a, ...passthrough } = o;
    let total = passthrough.b + passthrough.c.length;
    console.log(a);
    console.log(total);

    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let { a, b = 1001 } = wholeObject;
    };


    type C = { a: string, b?: number };

    function fun({ a, b=2 } = { a: '1' }): void {

    };

    fun({ a: 'yes' });

    // 展开
    let k = [ 1, 2 ];
    let l = [ 3, 4 ];
    let bothPlus = [ 0, ...k, ...l, 5 ];
    console.log(bothPlus);

    let defauts = {
        food: 'spicy',
        price: '$10',
        ambiance: 'noisy'
    };

    let search = { ...defauts, food: 'rich' };
    console.log(search)
};
d();