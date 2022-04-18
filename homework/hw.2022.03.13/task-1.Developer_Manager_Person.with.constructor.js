/* --------------------------- Person constructor --------------------------- */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I'm ${this.constructor.name}.`);
};
  

/* --------------------------- Manager constructor -------------------------- */
function Manager(name, age, managed = []) {
  Person.apply(this, [name, age]);
  this.managed = managed;
}
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;


/* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset = []) {
  Person.apply(this, [name, age]);
  this.skillset = skillset;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;


/* ----------------------------- Create Objects ----------------------------- */
const person = new Person('Martina Ilieva', 34);
person.greet();

const manager = new Manager('Bill Gates', 43, ['Maria Popova', 'Petar Petrov']);
manager.greet();

const developer1 = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
developer1.greet();

const developer2 = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
developer2.greet();


/* --------- Overwrite the greet() method for Developer and Manager --------- */
Manager.prototype.greet = function() {
  console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old.
I manage ${this.managed.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
};

Developer.prototype.greet = function() {
  console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old.
I know ${this.skillset.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
};


/* ----------------------------- Final output ----------------------------- */
developer1.greet();
developer2.greet();
manager.greet();