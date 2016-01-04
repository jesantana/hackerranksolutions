function isPangram(phraseOrig){
	var alreadyFound={},
	totalFound=0,
	totalLetters=26,
	i=0,
	phrase=phraseOrig.replace(/ /g, '').toLowerCase();
	
	for(i=0;i<phrase.length;i++){
		var current
		
		if(alreadyFound[phrase.charAt(i)]===undefined){
			alreadyFound[phrase.charAt(i)]=true;
			totalFound++;
			
			if(totalFound===totalLetters){
				console.log("pangram");
				return;
			}
		}
	}
	console.log("not pangram");
}


12345
12345
12345
12345