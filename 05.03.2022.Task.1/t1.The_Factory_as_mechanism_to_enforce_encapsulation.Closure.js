/*eslint-env es6*/
"use strict";

const devFactory = function(name, salary) {
    const _sensitive = {
        salary: salary,
        pwd: 'abracadabra'
    }
    
    return {
        name: name,
        getSalary: function() {
            return _sensitive.salary;
        },
        increaseSalary: function(value, pwd) {
            if (pwd === _sensitive.pwd)
                _sensitive.salary += value;
            else
                console.log(`\nWrong password! ${this.name} salary will not be increased!\n`);
        }
    };
};

const dev1 = devFactory('Peter', 1000);
const dev2 = devFactory('Maria', 1200);

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