var colors = ["red", "green", "blue"];
var body = document.body;

function changeBG(color){
	console.log(`color: ${color}`);
  	body.style.background = color;
}

for (let i = 0; i < colors.length; i++) {
  setTimeout(function(){
    console.log(`i:${i}`);
    changeBG( colors[i] );
  }, 1000*(i+1))
}


// 19.00.00:0001
// 	=> call changeBG() in 19.00.01:0000
// 	=> call changeBG() in 19.00.02:0001
// 	=> call changeBG() in 19.00.03:0001