//function processData(input) {
 
  //  calculateLibraryFee(parseStr(input));
    
    function calculateLibraryFee(dates){
	var today=dates[1];
	var totalFee=0;
	
	
		var currentDate=dates[0];
		
		if(!before(currentDate,today)){
			
			if(greaterYear(currentDate,today)){
				totalFee+=10000;
			}
			else if(greaterMonth(currentDate,today)){
				totalFee+=500*monthDiff(currentDate,today);
			}
			else{
				totalFee+=15*dayDiff(currentDate,today);
			}
		}
	
	
	console.log(totalFee);
	
	function before(date1,date2){
		return date1.getTime()<=date2.getTime();
	}
	
	function greaterYear(date1,date2){
		return date1.getFullYear()>date2.getFullYear();
	}
	
	function greaterMonth(date1,date2){
		return date1.getMonth()>date2.getMonth();
	}
	
	function monthDiff(date1,date2){
		return date1.getMonth()-date2.getMonth();
	}
	
	function dayDiff(date1,date2){
		return date1.getDate()-date2.getDate();
	}
}

function parseStr(str){
	var strDates=str.split("\n");
	var dates=[]
	
	for(var i=0;i<strDates.length;i++){
		var current=strDates[i].split(" ");
		dates.push(new Date(current[2],current[1]-1,current[0]));
	}
	return dates;
}

//} 

var dates=[];
dates.push(new Date(2015,7,2));
dates.push(new Date(2014,2,1));

calculateLibraryFee(dates);
/*	2 7 2015
	1 2 2014
	
	10000
**/