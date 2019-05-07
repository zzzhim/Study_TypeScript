// 继承接口
interface Shape {
    color: string
};

interface PenStroke {
    penWidth: number
};

interface Squares extends Shape, PenStroke {
    sideLength: number
};

let squre = {} as Squares;

squre.color = 'blue';
squre.sideLength = 10;
squre.penWidth = 5.0;

// 混合类型
interface Counter {
    (start: number): string,
    interval: number,
    reset(): void
};

function getCounter(): Counter {
    let counter = (function (star: number) {

    }) as Counter;

    counter.interval = 123;

    counter.reset = function () {

    };

    return counter;
};

let cc = getCounter();
cc(10);

// 接口继承类
class Control {
    private state: any
};

interface SelectableControl extends Control {
    select();
};

class Button extends Control implements SelectableControl {
    select() {

    }
};

class TextBox extends Control {
    select() {

    }
};