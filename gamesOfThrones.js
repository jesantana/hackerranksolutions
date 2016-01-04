function hasAPalindromAnagram(word){

	var amountOfOddLetters=0,
		letterMap={},
		iter=0,
		currentChar='';
		
	for(iter;iter<word.length;iter++){
		currentChar=word[iter];
		if(letterMap[currentChar]===undefined){
			letterMap[currentChar]=0;
		}
		letterMap[currentChar]++;
		
		if(letterMap[currentChar]%2===0){
			amountOfOddLetters--;
		}		
		else{
			amountOfOddLetters++;
		}
	}
	
	return word.length%2===amountOfOddLetters?'YES':'NO';
}
