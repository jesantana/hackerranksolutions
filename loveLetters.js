function distanceToPalin(word){
	var i=Math.floor(word.length/2),
	frontChar,backChar,
	numberOfOperations=0;
	
	
	for(i;i<=word.length-1;i++){
		frontChar=word[i];
		backChar=word[word.length-1-i];
		
		numberOfOperations+=Math.abs(frontChar.charCodeAt(0)-backChar.charCodeAt(0));
	}
	
	console.log(numberOfOperations);
}

function parseInput(text){
		var lines=text.split("\n");
		console.log(lines);
		for(var i=1;i<=lines.length;i++){
			distanceToPalin(lines[i]);
		}
}

