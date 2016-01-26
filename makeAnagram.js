function numberOfLettersToMakeAnagram(wordA,wordB){
	
	var wordsAWithScore={'word':wordA,'score':1},
	wordsBWithScore={'word':wordB,'score':-1},
	wordsToInsert=[wordsAWithScore,wordsBWithScore],
	foundLetters={},
	iWords=0,
	iLetters=0,
	currentChar,
	result=0;
	
	for(iWords;iWords<wordsToInsert.length;iWords++){
		for(iLetters=0;iLetters<wordsToInsert[iWords].word.length;iLetters++){
			currentChar=wordsToInsert[iWords].word[iLetters];
			
			if(foundLetters[currentChar]===undefined){
				foundLetters[currentChar]=0;
			}
		
			foundLetters[currentChar]+=wordsToInsert[iWords].score;
		}
	}
	console.log(foundLetters);
	for (var property in foundLetters) {
		if (foundLetters.hasOwnProperty(property) && foundLetters[property]!==0) {
			result+=Math.abs(foundLetters[property]);
		}
	}

	return result;
}

function parseInput(text){
	var lines=text.split("\n");
	
	console.log(numberOfLettersToMakeAnagram(lines[0],lines[1]));
	
}

console.log(numberOfLettersToMakeAnagram("fcrxzwscanmligyxyvym","jxwtrhvujlmrpdoqbisbwhmgpmeoke")) //30
console.log(numberOfLettersToMakeAnagram("tttttttttttttttttttttttttttttttttttttsssssssssssssssss",
"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")); //107

