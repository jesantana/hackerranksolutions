function decideClass(arriveTimes,numberExpected){

	return amountOfStudentsThatArrivedOnTime(arriveTimes,numberExpected)<numberExpected?'YES':'NO';

	function amountOfStudentsThatArrivedOnTime(arriveTimes,numberExpected){
		var arrivedCounter=0;
		
		for(var i=0;i<arriveTimes.length;i++){
			if(arriveTimes[i]<=0){
				arrivedCounter++;
				
				if(arrivedCounter==numberExpected){
					break;
				}
			}
		}
		
		return arrivedCounter;
	}
}


function parseInput(strText){
	var lines=strText.split("\n");
	var numberOfExec=Number(lines[0]);
	
	for(var i=0;i<numberOfExec;i++){
		var k=lines[2*i+1].split(" ")[1];
		var studentTimes=lines[2*i+2].split(" ");
		
		decideClass(studentTimes,k);
	}
}