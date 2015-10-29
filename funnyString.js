function isFunnyString(str){
	var startingPos=0,endingPos;
	
	for(startingPos=0,endingPos=str.length-1;startingPos<str.length-1;startingPos++,endingPos--){
		var startingValue=Math.abs(str.charCodeAt(startingPos+1)-str.charCodeAt(startingPos));
		var endingValue=Math.abs(str.charCodeAt(endingPos-1)-str.charCodeAt(endingPos));
		
		if(startingValue!==endingValue){
			console.log("Not Funny");
			return;
		}
	}
	
	console.log("Funny");
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<lines.length;i++){
		var line=lines[i];
		
		isFunnyString(line);
	}
}