function minAmountOfMoney(blackAmount,whiteAmount,blackPrice,whitePrice,conversion){

	var calculatedWhitePrice=0,
		calculatedBlackPrice=0;
		
	calculatedWhitePrice=Math.min(whitePrice,blackPrice+conversion);
	calculatedBlackPrice=Math.min(blackPrice,whitePrice+conversion);
	
	console.log(blackAmount*calculatedBlackPrice+whiteAmount*calculatedWhitePrice);
}

function parseInput(text){
	var lines=text.split("\n");
	
	for(var i=1;i<lines.length;i+=2){
		var amount=lines[i].split(" ");
		var prices=lines[i+1].split(" ");
		
		var bAm=Number(amount[0]);
		var wAm=Number(amount[1]);
		
		var bPr=Number(prices[0]);
		var wPr=Number(prices[1]);
		var conv=Number(prices[2]);
		
		minAmountOfMoney(bAm,wAm,bPr,wPr,conv);
	}
}