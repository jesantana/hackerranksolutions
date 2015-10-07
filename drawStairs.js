function drawStaircase(n){

	for(var i=1;i<=n;i++){
		var currentCad="";
		for(var j=1;j<=n;j++){
			
			if(j<=(n-i)){
				currentCad+=" ";
			}
			else{
				currentCad+="#";
			}
		}
		
		console.log(currentCad);
	}
}

drawStaircase(1);

drawStaircase(10);

drawStaircase(0);

drawStaircase(4);