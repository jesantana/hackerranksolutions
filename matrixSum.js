function getMatrixMaxSum(array){
    var len =array.length/2;
    var lastPos =array.length-1;
    var totalSum = 0;
    var i,j =0;

    function findMaxForPos(row,col){
        var upperLeft = array[row][col];
        var upperRight = array[row][lastPos-col];
        var bottomLeft = array[lastPos-row][col];
        var bottomRigth = array[lastPos-row][lastPos-col];

        return Math.max(upperLeft,Math.max(upperRight,Math.max(bottomLeft,bottomRigth)));
    }

    for(i=0;i<len;i++){
        for(j=0;j<len;j++){
            totalSum+=findMaxForPos(i,j);

        }
    }

    return totalSum;
}

function parseInput(text){
	var lines=text.split("\n");
	var numberOfInputs=parseInt(lines[0]);
    var i,j =0;
    var currentN =0;
    var currentLine=1;
    var currentMatrix;

    for(i=0;i<numberOfInputs;i++){
        currentN = 2*parseInt(lines[currentLine++]);
        currentMatrix=[];
        for(j=currentLine;j<currentLine+currentN;j++){

            currentMatrix.push(lines[j].split(' ').map(function(current){
                return parseInt(current);
            }));
        }
        currentLine=currentLine+currentN;
        console.log(getMatrixMaxSum(currentMatrix));

    }


}

var mat = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];

console.log(getMatrixMaxSum(mat))
