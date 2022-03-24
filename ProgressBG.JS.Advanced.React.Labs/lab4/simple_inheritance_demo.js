const ford = {
	manifacturer: 'Ford',
	speed: 200
}

const fordOfPesho={
	wings:2,
	// speed:300,
}


// make fordOfPestho to nherit from ford:
fordOfPesho.__proto__ = ford

ford.manifacturer ='Forddddddddd'

console.log( fordOfPesho.manifacturer );
console.log( fordOfPesho.speed );