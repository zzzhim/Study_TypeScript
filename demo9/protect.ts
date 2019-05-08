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

let pets = getSmallPet();

// 类型保护机制
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
};

if(isFish(pet)) {
    pet.swim();
}else {
    pet.fly();
};

function isNumber(x: any): x is number {
    return typeof x === 'number';
};

function isString(x: any): x is string {
    return typeof x === 'string';
};

function padLeft(value: string, padding: string | number) {
    if(isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    ;
    if(isString(padding)) {
        return padding + value;
    }
    ;
    throw new Error(`Expected string or number, got ${padding}`);
};

// function padLeft(value: string, padding: string | number) {
//     if(typeof padding === 'number') {
//         return Array(padding + 1).join(' ') + value;
//     }
//     ;
//     if(typeof padding === 'string') {
//         return padding + value;
//     }
//     ;
//     throw new Error(`Expected string or number, got ${padding}`);
// };