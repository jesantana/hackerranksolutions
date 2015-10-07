

function doBobThing(money,price,rate){
	var currentBuy=buyInShop(money,price);
	var totalChocolats=currentBuy[0];
	var spareWrappers=currentBuy[1];
	var thereAreEnoughWrappersToBuyNewChocolats=true;
	
	while(spareWrappers>0 && thereAreEnoughWrappersToBuyNewChocolats){
		currentBuy=exchangeWrappers(spareWrappers,rate);
		totalChocolats+=currentBuy[0];
		spareWrappers=currentBuy[1];
		thereAreEnoughWrappersToBuyNewChocolats=currentBuy[2];
	}
	
	return totalChocolats;
	
		//When you buy in a shop you get money/price number of chocolats and the same number of wrappers
		function buyInShop(money,price){
			var amount=Math.floor(money/price);
			
			return [amount,amount]
		}

		//When you excahnge wrappers you get wrappers/rate new chocolats and (wrappers/rate)+(wrappers%rate) wrappers
		function exchangeWrappers(wrappers,rate){
			var newChocolats=Math.floor(wrappers/rate);
			var spareWrappers=wrappers%rate;
			
			return [newChocolats,newChocolats+spareWrappers,newChocolats!==0];
		}
}


function parseInput(text){
	var lines=text.split("\n");
	
	
	for(var i=1;i<lines.length;i++){
		var line=lines[i].split(" ");
		var money=Number(line[0]);
		var price=Number(line[1]);
		var rate=Number(line[2]);
		
		var resp=doBobThing(money,price,rate);
		console.log(resp);
	}
}