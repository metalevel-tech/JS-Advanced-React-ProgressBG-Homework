function carFactory(id) {
	return {
		id:id
	}
}
carFactory.prototype.drive = function () {
	console.log(`${this.id} is driving`);
}

function Car(id) {
	this.id = id
};
Car.prototype.drive = function () {
	console.log(`${this.id} is driving`);
};


const car1 = new Car(1);
// car1.__proto__ = Car.prototype

const car2 = carFactory(1);
const car3 = carFactory(1);
car2.__proto__ = carFactory.prototype;

car1.drive();
car2.drive();





