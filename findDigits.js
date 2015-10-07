function numberDigitsIterator(number){
	var currentNumber=number;
	
	function next(){
		if(currentNumber===0){
			return undefined;
		}
		var result=currentNumber%10;
		currentNumber=Math.floor(currentNumber/10);
		
		return result;
	}
	
	return {
		"next":next
	}
}
function findCountDivisibleDigits(n){
	var count=0;
	var iter=numberDigitsIterator(n);
	var currentDigit=iter.next();

	while(currentDigit!==undefined){
		if(n%currentDigit==0){
			count++
		}
		currentDigit=iter.next();
	}
	
	return count;
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<=lines.length;i++){
		var resp=findCountDivisibleDigits(Number(lines[i]));
		console.log(resp);
	}
}