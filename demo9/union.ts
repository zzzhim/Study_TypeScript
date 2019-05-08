// 联合类型 使用 | 进行分割
// 表示一个值可以是几种类型之一

function padLeft(value: string, padding: string | number) {
    if(typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value ;
    }

    if(typeof padding === 'string') {
        return padding + value ;
    }

    throw new Error(`Expected string or number got ${padding}`);
};

padLeft('Hello world', 4);

interface Bird {
    fly()
    layEggs()
};

interface Fish {
    swim()
    layEggs()
};

function getSmallPet(): Fish | Bird {
    return 
};

let pet = getSmallPet();
// 因为 layEggs 是 Fish 和 Bird 接口的共有属性，可以确保必定存在，因此不会报错
pet.layEggs();
//  因为 swim 不是 Fish 和 Bird 接口的共有属性，不能保证 swim 方法必定存在，所以会抛出错误
pet.swim();