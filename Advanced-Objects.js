//reference type to reference object and address --
//non primitive type -- created by language programmer

var object1 = { value: 10 };

var object2 = object1;

var object3 = { value: 10 };

//context vs scope
//this is object environment that we are currently in

function b() {
    let a = 4;
}

function a() {
    console.log(this);
}


//instantiation -- copy object instance and reuse the constructor attributes
//easier than classical inheritance

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`I'm a $(this.type)`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
