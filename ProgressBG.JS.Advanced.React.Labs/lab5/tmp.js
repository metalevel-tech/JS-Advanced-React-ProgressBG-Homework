function carFactory(id) {

	return {
		id:id,
		drive:function (id) {
			console.log(`${this.id} is driving`);
		}
	}
}

let car1 =  carFactory(1);
let car2 =  carFactory(2);

car1.drive(5);


carFactory.prototype.drive = function (id) {
	console.log(`${this.id} is driving`);
};

car.drive(3);




let obj = {
	id: 1
}