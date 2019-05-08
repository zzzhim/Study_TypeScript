let x = 3;

class Animal {
    numleas: number
};

class Bee extends Animal {

};

class Lion extends Animal {
    
};

let zoo = [ new Bee(), new Lion() ];




window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.clickTime);
};

function createZoo(): Animal[] {
    return [ new Bee(), new Lion() ];
};