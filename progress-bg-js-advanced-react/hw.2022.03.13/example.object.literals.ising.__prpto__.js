// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/prototypalInheritance/prototypalInheritance.html#/7/1
// Do not use __proto__ outside of object literals!

// create 'car' object
const car = {
    manufacturer: undefined,
    speed: 100,
    drive: function() {
        if (this.wings >= 2) {
            console.log(`This ${this.manufacturer} is flying with ${this.speed} km/h!`);
        } else {
            console.log(`This ${this.manufacturer} is just driving with ${this.speed} km/h.`);
        }
    }
};

// create 'ford' object
const ford = {
    // make 'ford' to inherit from 'car'
    __proto__: car,

    manufacturer: 'Ford',
    speed: 200
};

// create 'theFordOfPesho' object
const theFordOfPesho = {
    // make 'theFordOfPesho' to inherit from 'ford'
    __proto__: ford,

    wings: 2,
    speed: 205
};

ford.drive();
theFordOfPesho.drive();