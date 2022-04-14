(function() {
    console.log(`\n\n${'-'.repeat(10)} example A ${'-'.repeat(10)}`);
    
    // create 'Car' constructor
    const Car = function(manufacturer, speed = 100) {
        this.manufacturer = manufacturer;
        this.speed = speed;
    };
    Car.prototype = {
        drive: function() {
            if (this.wings >= 2) {
                console.log(`Flying with ${this.speed} km/h`);
            } else {
                console.log(`Driving with ${this.speed} km/h`);
            }
        }
    };
    
    // create 'Ford' constructor
    const Ford = function(speed) {
        const manufacturer = 'Ford';
    
        // use the parent constructor
        Car.apply(this, [manufacturer, speed]);
    };
    
    console.log(`Ford.prototype.__proto__ = Car.prototype;`);
    Ford.prototype.__proto__ = Car.prototype;
    
    console.log(`Ford.prototype.__proto__ >`);
    console.dir(Ford.prototype.__proto__);
    console.log(`Ford.prototype >`);
    console.dir(Ford.prototype);
    console.log(`Ford.prototype.constructor >`);
    console.dir(Ford.prototype.constructor);
    
    
    // create 'ford' objects
    const fordT = new Ford(200);
    fordT.drive();
    
    const fordP = new Ford(200);
    fordP.wings = 2;
    fordP.drive();
})();

/** ----------- **/
(function() {
    console.log(`\n\n${'-'.repeat(10)} example B ${'-'.repeat(10)}`);
    
    // create 'Car' constructor
    const Car = function(manufacturer, speed = 100) {
        this.manufacturer = manufacturer;
        this.speed = speed;
    };
    Car.prototype = {
        drive: function() {
            if (this.wings >= 2) {
                console.log(`Flying with ${this.speed} km/h`);
            } else {
                console.log(`Driving with ${this.speed} km/h`);
            }
        }
    };
    
    // create 'Ford' constructor
    const Ford = function(speed) {
        const manufacturer = 'Ford';
    
        // use the parent constructor
        Car.apply(this, [manufacturer, speed]);
    };
    
    console.log(`Object.create(Car.prototype);`);
    Ford.prototype = Object.create(Car.prototype);

    console.log(`Ford.prototype.__proto__ >`);
    console.dir(Ford.prototype.__proto__);
    console.log(`Ford.prototype >`);
    console.dir(Ford.prototype);
    console.log(`Ford.prototype.constructor >`);
    console.dir(Ford.prototype.constructor);
    
    console.log(`\nFord.prototype.constructor = Ford;`);
    Ford.prototype.constructor = Ford;
    console.log(`Ford.prototype.constructor >`);
    console.dir(Ford.prototype.constructor);
    console.log('\n');

    // create 'ford' objects
    const fordT = new Ford(200);
    fordT.drive();
    
    const fordP = new Ford(205);
    fordP.wings = 2;
    fordP.drive();
})();
