function findIndex(orderedArray, value){

    return findIndexInternal(0,orderedArray.length-1);

    function findIndexInternal(startinPos,endingPos){
        console.log("Looking for :"+value+" startinPos "+startinPos+" endingPos "+endingPos+" crruent "+(Math.floor((endingPos+startinPos)/2)))
        if(endingPos>=startinPos){
            var currentPos=Math.floor((endingPos+startinPos)/2);

            if(orderedArray[currentPos]===value){
                return currentPos;
            }
            else if(orderedArray[currentPos]>value){
                return findIndexInternal(startinPos,currentPos-1);
            }
            else{
                return findIndexInternal(currentPos+1,endingPos);
            }
        }
        else{
            return -1;
        }

    }
}

function parseInput(text){
		var lines=text.split("\n");
		var v = parseInt(lines[0]);
        var array = lines[2].split(" ");

        array = array.map(function(current){
            return parseInt(current);
        })

        return array;
}
