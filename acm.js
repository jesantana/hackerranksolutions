function acm(participants){
	var maxNumberOfSkills=0,
		amountOfTeamsWithMaxSkills=0,
		i=0,
		j=0;
		
	for(i=0;i<participants.length;i++){
		for(j=i+1;j<participants.length;j++){
			var currentSkillCount=countUnionOfSkills(participants[i],participants[j],maxNumberOfSkills);
			
			if(currentSkillCount>maxNumberOfSkills){
				maxNumberOfSkills=currentSkillCount;
				amountOfTeamsWithMaxSkills=1;
			}
			else if(currentSkillCount===maxNumberOfSkills){
				amountOfTeamsWithMaxSkills++;
			}
		}
	}
	console.log(maxNumberOfSkills);
	console.log(amountOfTeamsWithMaxSkills);
	
	function countUnionOfSkills(part1,part2,maxSkills){
		var i=0,
			skillCount=0;
				
		for(i;i<part1.length;i++){
			if(part1[i] || part2[i]){
				skillCount++;
			}
			else if(maxSkills>part1.length-i-1+skillCount){
				skillCount=-1;
				break;
			}
		}
		return skillCount;
	}
}

function parseInput(text){
	var lines=text.split("\n");
	
	var boolArray=[];
	
	for(var i=1;i<lines.length;i++){
		
		boolArray.push(fromBinaryStringToArray(lines[i]))
	}
	acm(boolArray);
	
	function fromBinaryStringToArray(strBinary){
		var result=[],
			i=0;
		for(i;i<strBinary.length;i++){
			result.push(strBinary[i]==='1');
		}
		return result;
	}
}