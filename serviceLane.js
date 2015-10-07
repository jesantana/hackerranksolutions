function findMinimalLane(laneArr,laneStart,laneEnd){
	var minimun=Math.MAX_VALUE;
	for(var i=laneStart;i<=laneEnd;i++){
		if(laneArr[i]<minimun){
			minimun=laneArr[i];
		}
	}
	
	return Math.min(3,minimun);
}

function parseInput(text){
	var lines=text.split("\n");
	var laneLength=lines[1].split(" ");
	
	
	for(var i=2;i<lines.length;i++){
		var line=lines[i].split(" ");
		var min=Number(line[0]);
		var max=Number(line[1]);
		var resp=findMinimalLane(laneLength,min,max);
		console.log(resp);
	}
}