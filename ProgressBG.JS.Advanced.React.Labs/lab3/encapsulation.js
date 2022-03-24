function objectFactory(id) {
	let _id = id;

	return {

		setID: function (value) {
			console.log(`Log change`);
			_id = value
		},
		getID:function () {
			return _id
		}
	}
}

const obj1 = objectFactory(1);
console.log( obj1.getID() );

obj1.id = 5;
console.log( obj1.getID() );
console.log( obj1 );





