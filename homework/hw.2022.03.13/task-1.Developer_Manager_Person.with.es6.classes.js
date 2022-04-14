/* --------------------------- Person Class --------------------------- */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`
    Hi, I'm ${this.name} and I'm ${this.age} years old.
    I'm ${this.constructor.name}.`);
  }
}
  

/* -------------------- Manager Class and greet() override -------------------- */
class Manager extends Person{
  constructor(name, age, managed = []) {
    super(name, age);
    this.managed = managed;
  }

  greet() {
    console.log(`
    Hi, I'm ${this.name} and I'm ${this.age} years old.
    I'm ${this.constructor.name}.
    I manage ${this.managed.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
  }
  
}


/* -------------------- Developer Class and greet() override -------------------- */
class Developer extends Person {
  constructor(name, age, skillset = []) {
    super(name, age);
    this.skillset = skillset;
  }
  
  greet() {
    console.log(`
    Hi, I'm ${this.name} and I'm ${this.age} years old.
    I'm ${this.constructor.name}.
    I know ${this.skillset.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
  }
}

/* ----------------------- Create Objects and Final output ----------------------- */
const person = new Person('Martina Ilieva', 34);
person.greet();

const manager = new Manager('Bill Gates', 43, ['Maria Popova', 'Petar Petrov']);
manager.greet();

const developer1 = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
developer1.greet();

const developer2 = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
developer2.greet();
