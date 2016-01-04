function alternateCharacters(string){
	
	var iter=0,
		previous='',
		deletions=0;
	
	for(iter;iter<string.length;iter++){
		if(string[iter]!==previous){
			previous=string[iter];
		}
		else{
			deletions++;
		}
	}
	
	return deletions;
}

console.log(alternateCharacters('AAAA'));
console.log(alternateCharacters('BBBBB'));
console.log(alternateCharacters('ABABABAB'));
console.log(alternateCharacters('BABABA'));
console.log(alternateCharacters('AAABBB'));