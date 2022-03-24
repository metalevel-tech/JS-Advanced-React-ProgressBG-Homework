const obj = {
	log: ['a', 'b', 'c'],
	get latest() {
		if (this.log.length === 0) {
			return undefined;
		}
		return this.log[this.log.length - 1];
	},

	set latest(val) {
		this.log[this.log.length - 1] = val
	}
};

console.log(obj.latest); // 'c
obj.latest = 'd';
console.log(obj.latest); // 'd

