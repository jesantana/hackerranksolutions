function numberOfSquaresInInterval(a,b){
	var sqrtCurrent=Math.ceil(Math.sqrt(a));
	console.log("sqrtCurrent"+sqrtCurrent);
	var counter=0;
	var currentCalcValue=Math.pow(sqrtCurrent,2);
	console.log("currentCalcValue"+currentCalcValue);
	
	while(currentCalcValue>=a && currentCalcValue<=b){
		sqrtCurrent++;
		counter++
		currentCalcValue=Math.pow(sqrtCurrent,2);
	}
	
	return counter;
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<lines.length;i++){
		var line=lines[i].split(" ");
		var a=Number(line[0]);
		var b=Number(line[1]);
		var resp=numberOfSquaresInInterval(a,b);
		console.log(resp);
	}
}