"use strict";
const _sensitive = new WeakMap();

function DevConstructor(name, salary) {
    this.name = name;

    _sensitive.set(this, {
        salary: salary,
        pwd: 'abracadabra'
    });
}

DevConstructor.prototype.getSalary = function() {
    return _sensitive.get(this).salary;
};

DevConstructor.prototype.increaseSalary = function(value, pwd) {
    if (pwd === _sensitive.get(this).pwd)
        _sensitive.get(this).salary += value;
    else
        console.log(`Wrong password! ${this.name} salary will not be increased!`);
};

const dev1 = new DevConstructor('Peter', 1000);
const dev2 = new DevConstructor('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

// *** OUTPUT ***
// Peter salary is 1000
// Maria salary is 1200

// Wrong password! Maria salary will not be increased!

// Peter salary after promotion is 1500
// Maria salary after promotion is 1200

console.log(dev1.name, _sensitive.get(dev1));
console.log(dev2.name, _sensitive.get(dev2));

// Peter {salary: 1500, pwd: 'abracadabra'}
// Maria {salary: 1200, pwd: 'abracadabra'}