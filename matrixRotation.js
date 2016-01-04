function rotate(matrix,r){

	var diagonalIndex=0,
	rowLenght=matrix.length,
	colLength=matrix[0].length,
	minDimension=Math.min(rowLenght,colLength)/2;
	
	for(diagonalIndex=0;diagonalIndex<minDimension;diagonalIndex++){
		var rotationCounter=0;
		for(rotationCounter=0;rotationCounter<r;rotationCounter++){
			rotateSquare(diagonalIndex,diagonalIndex,rowLenght-1-diagonalIndex,colLength-1-diagonalIndex);
		}
	}
	
	
	function rotateSquare(rowInitial,colInitial,rowEnding,colEnding){
		console.log("rowInitial "+rowInitial+" colInitial "+colInitial+" rowEnding "+rowEnding+" colEnding "+colEnding);
	}
}

var mat=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
var mat1=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[13,14,15,16]]
var mat2=[[1,2,3,4,1],[5,6,7,8,1],[9,10,11,12,1],[13,14,15,16,1]]
rotate(mat)
rotate(mat1)
rotate(mat2)

