// 泛型约束
interface lengthwise {
    length: number
};
// 必须要满足约束
function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
};

loggingIdentity({ length: 1 });

// Key 是被 T 的key所约束， 也就是key必须存在T  的属性中
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
};

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // 正确: x 中 存在 a 这个属性值
// getProperty(x, 'm'); // 错误: x 中 不存在 m 这个属性值


function create<T>(c: { new(): T }): T {
    return new c();
};


class BeeKeeper {
    hasMask: boolean
};

class LionKeeper {
    nametag: string
};

class Animal {
    numLengs: number
};

class Bee extends Animal {
    keepper: BeeKeeper
};

class Lion extends Animal {
    keepper: LionKeeper
};

function createInstance<T extends Animal>(c: new() => T): T {
    return new c();
};

createInstance(Lion).keepper.nametag
createInstance(Bee).keepper.hasMask