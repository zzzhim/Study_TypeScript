// let s = 'foo';
// s = null;
// let sn: string | null = 'bar';
// sn = null;
// sn = undefined;


// 可以为 null 的类型
function f(x: number, y?: number) {
    return x + (y || 0);
};

f(1, 2);
f(1, 2);
f(1, undefined);
f(1, null);

class C {
    a: number
    b?: number
}

let c = new C();

c.a = 12;
c.a = undefined;
c.b = 13;
c.b = undefined;
c.b = null;

function fn(sn: string | null): string {
    if(sn === null) {
        return 'default';
    }else {
        return sn;
    };
};

function broken(name: string | null): string {
    function postfix(epither: string) {
        return name!.charAt(0) + '. the ' + epither;
    }

    name = name || 'Bob';
    return postfix(name);
};