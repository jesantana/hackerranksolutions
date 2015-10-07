function cutAllSticks(arrStick){
	arrStick.sort(function(a, b){return a-b});
	for(var sticksCuttedInStep=cutSmallerStick(arrStick);sticksCuttedInStep!==-1;sticksCuttedInStep=cutSmallerStick(arrStick)){
		console.log(sticksCuttedInStep);
	}
	
	function cutSmallerStick(sortedArrStick){
	var smaller=-1;
	var cutted=0;
	
	for(var i=0;i<sortedArrStick.length;i++){
		if(sortedArrStick[i]!==0){
			
			if(smaller===-1){
				smaller=sortedArrStick[i];
			}
			sortedArrStick[i]=sortedArrStick[i]-smaller;
			cutted++;
		}
	}
	
	return smaller!==-1?cutted:-1;
}
}

function parseInput(text){
	var lines=text.split("\n")[1];
	lines=lines.split(" ");
	
	for(var i=0;i<lines.length;i++){
		lines[i]=Number(lines[i]);
		
	}
	
	cutAllSticks(lines);
	
}