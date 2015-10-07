//This is a greedy algorithm that given the equation ax+by=n and given a,b,n finds the biggest pair (x,y)

function findBiggestDecentNumber(a,b,n){
	var aTimes=Math.floor( n/b );
	
	for(var i=aTimes;i>=0;i--){
		var rest=n-(i*b);
	
		if(rest%a==0){
			return [i,rest/a];
		}
	}
	
	return undefined;	
}

function composeResponse(arrResponse){
	
	if(arrResponse===undefined){
		return -1;
	}
	else{
		return repeatString("555",arrResponse[0])+repeatString("33333",arrResponse[1]);
	}
	
	function repeatString(str,times){
		var result="";
		
		for(var i=0;i<times;i++){
			result+=str;		
		}
		
		return result;
	}
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<=lines.length;i++){
		var resp=findBiggestDecentNumber(5,3,Number(lines[i]));
		console.log(composeResponse(resp));
	}
}