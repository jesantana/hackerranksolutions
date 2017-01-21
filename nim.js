function nimsGame(stones){
    var result = stones.reduce(function(acc,current){
        return acc^current;
    },0);

    if(result ===0 ){
        return "SECOND";
    }
    return "FIRST";
}


function parseInput(text){
 	var lines=text.split("\n");
    var currentStones;


     for(i=1;i<lines.length;i++){
         if(i%2 ==0 ){
             currentStones = lines[i].split(' ').map(function(current){
                 return parseInt(current);
             });
             console.log( nimsGame(currentStones));
         }
     }
 }
