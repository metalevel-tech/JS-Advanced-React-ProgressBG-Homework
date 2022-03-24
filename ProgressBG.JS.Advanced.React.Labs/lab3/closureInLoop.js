var cats = [];

// for (var i = 0; i < 3; i++) {
// 	(function () {
// 		let i = i; // the problem
// 		cats[i] = function(){
// 			console.log(`Cat ${i} is ready!`);
// 		}
// 	})();
// }


for (var i = 0; i < 3; i++) {
	(function (i) {
		cats[i] = function(){
			console.log(`Cat ${i} is ready!`);
		}
	})(i);
}

// console.log(`i = ${i}`); // i = 3

// console.log( typeof(cats[0]));
cats[0]()
cats[1]()

// global = {
// 	cats: 73247328 ([]),
// 		i: 7438473 (3)
// }

// {
// 	i: 784375838 (undefined)
// }



