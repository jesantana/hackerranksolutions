function findAllSubstrings(cad){
	var substringSet=[],
		iter1=0,
		iter2=0,
		numberOfAnagrams=0;
	
	findAllSubstringsLauncher(cad,0,[],substringSet);
	for(iter1=0;iter1<substringSet.length-1;iter1++){
		for(iter2=iter1+1;iter2<substringSet.length;iter2++){
			
			if(substringSet[iter1].length ===substringSet[iter2].length &&	isAnagram(substringSet[iter1],substringSet[iter2]))
				numberOfAnagrams++;
		}
	}
	console.log(numberOfAnagrams)
	return numberOfAnagrams;
	
	function findAllSubstringsLauncher(cad,pos,existing){
		var i=0,
			newExisting=[];
			
		for(i;i<existing.length;i++){
			substringSet.push(existing[i]+cad[pos]);
		}
		substringSet.push(cad[pos]);
		
		if(pos<cad.length-1){
			for(i=0;i<existing.length;i++){
				newExisting[i]=existing[i]+cad[pos];
			}
			newExisting.push(cad[pos]);
			
			findAllSubstringsLauncher(cad,++pos,newExisting);
		}
	}
	
	function isAnagram(word1, word2) {
	  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
		throw new Error('isAnagram requires two strings to be passed.')
	  }

	  var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
	  var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();

	  var counts = [];
	  var word1Length = normalizedWord1.length;
	  var word2Length = normalizedWord2.length

	  if (word1Length !== word2Length) { return false; }

	  for (var i = 0; i < word1Length; i++) {
		var index = normalizedWord1.charCodeAt(i)-97;
		counts[index] = (counts[index] || 0) + 1;
	  }

	  for (var i = 0; i < word2Length; i++) {
		var index = normalizedWord2.charCodeAt(i)-97;
		if (!counts[index]) { return false; }
		else { counts[index]--; }
	  }

	  return true;
	}
	
	
}

function parseInput(text){
		var lines=text.split("\n");
		
		for(var i=1;i<=lines.length;i++){
			findAllSubstrings(lines[i]);
		}
}

findAllSubstrings("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");