function encrypt(phrase){
	var phrase_nospace=phrase.replace(/ /g, '');
	var values=findSmallestSquareFittingLetters(phrase_nospace.length);
	var rows=Math.floor(values[0]);
	var columns=Math.ceil(values[1]);
	var arr=[];
	
	
	var i=0;
	for(i;i<rows;i++){
		var startingLetter=i*columns;
		var currentSubString=phrase_nospace.substring(startingLetter,startingLetter+columns);
		
		arr.push(currentSubString.split(''));
	}
	printArrayOnReverseOrder(arr);
	
	function findSmallestSquareFittingLetters(amountOfLetters){
		var sqrt=Math.sqrt(phrase_nospace.length);
		var min=Math.floor(sqrt);
		var max=Math.ceil(sqrt);
	
		return min*max>amountOfLetters?[min,max]:[max,max];
	}
	
	function printArrayOnReverseOrder(arr){
		var col=0,row=0;
		var finalString="";
		
		for(col;col<arr[0].length;col++){
			for(row=0;row<arr.length;row++){
				if(arr[row][col]!==undefined){
					finalString+=arr[row][col];
				}
			}
			
			if(col<arr[0].length){
				finalString+=" ";
			}
		}
		
		console.log(finalString);
	}
}