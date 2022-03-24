// Do not change the object
const counter = {
	currentCount : 0,
	tick(){
        this.currentCount++;
		console.log(this.currentCount);
	}
}

// fix the problem in countdown function
function countdown(times) {
	const delay = 2000;
	while(times){
		setTimeout(counter.tick.bind(counter), delay*times);
		times--;
	}
}
countdown(3);
// // 19.00.0000

// 	-> tick()=> 19.00.30000001
// 	-> tick()=> 19.00.20000002
// 	-> tick()=> 19.00.10000003


// solution 2
function countdown2(times) {
	const delay = 2000;
	while(times){
		setTimeout(() => counter.tick.apply(counter), delay*times);
		times--;
	}
}

countdown2(3);
// // 19.00.0004
// 	-> tick()=> 19.00.300000000004
