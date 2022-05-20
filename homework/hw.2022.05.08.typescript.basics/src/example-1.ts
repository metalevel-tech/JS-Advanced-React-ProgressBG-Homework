
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    speak() {
        console.log(`${this.name} make an animal noise.`);
    }
}