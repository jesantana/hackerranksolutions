function countAmountOfKaprekars(p,q){
	var i=0,
		finalSet=[],
		written=false,
		strFinal="";

	for(i=p;i<=q;i++){
		if(isKaprekar(i)){
			finalSet.push(i);
			written=true;
		}
	}

	if(finalSet.length===0){
		console.log("INVALID RANGE");
	}
	else{
		finalSet.forEach(function(current){
			if(strFinal!==""){
				strFinal+=" ";
			}
			strFinal+=current;
		});
	}
	
	function isKaprekar(n){
		var square=n*n,
			sqrStr=square.toString(),
			len=sqrStr.length,
			half=Math.floor(len/2),
			firstHalf=Number(sqrStr.substring(0,half));
			secondHalf=Number(sqrStr.substring(half));
		
		console.log(len);
		console.log(half);
		console.log(firstHalf);
		console.log(secondHalf);
		
		return (firstHalf+secondHalf)===n;
	}
}

function parseInput(text){
	var lines=text.split("\n");
	var a=Number(lines[0]);
	var b=Number(lines[1]);
	
	countAmountOfKaprekars(a,b);
	
}