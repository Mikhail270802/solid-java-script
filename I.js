// Interface Segregation Principle

//class Animal {
//    constructor(name) {
//        this.name = name
//    }

//    walk() {
//        console.log(`${this.name} can walk`)
//    }

//    swim() {
//        console.log(`${this.name} can swim`)
//    }

//    fly() {
//        console.log(`${this.name} can fly`)
//    }
//}

//class Dog extends Animal {
//    fly () {
//        return null
//    }
//}

//class Whale extends Animal {
//    walk() {
//        return null
//    }

//    fly() {
//        return null
//    }
//}

//class Hawk extends Animal {
//    swim() {
//        return null
//    }
//}

//const dog = new Dog('Bullet')
//dog.walk()
//dog.swim()
//dog.fly()

//const whale = new Whale('Arkady')
//whale.walk()
//whale.swim()
//whale.fly()

//const hawk = new Hawk('Gosha')
//hawk.walk()
//hawk.swim()
//hawk.fly()

// Composition API

class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

class Dog extends Animal{}
class Hawk extends Animal{}
class Whale extends Animal{}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Hawk.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Bullet')
dog.walk()
dog.swim()

const hawk = new Hawk('Gosha')
hawk.walk()
hawk.fly()

const whale = new Whale('Arkady')
whale.swim()