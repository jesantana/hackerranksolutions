function calculateHeight(cycles){
	var height=1;
	
	for(var i=1;i<=cycles;i++){
		if(i%2==1){
			height++;
		}
		else{
			height*=2;
		}
	}
	
	return height
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<=lines.length;i++){
		var resp=calculateHeight(Number(lines[i]));
		console.log(resp);
	}
}