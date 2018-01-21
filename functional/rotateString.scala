object Solution {

    def main(args: Array[String]) {
        val n = io.StdIn.readInt
		val list = ( 1 to n ).map( (x) => io.StdIn.readLine )
							.map((current) => rotate(current))
                            .toList
        
        
			
        for(element <- list) println(element)
    }
    
    def rotate(cad: String): String ={
					def rotateInternal(cad: String, n: Int): List[String] ={
							if (n > 0) {
									val nString = cad.tail + cad.head;
									nString :: rotateInternal(nString, n-1);
							}
							else {
									List()
							}
					}
				
				
					rotateInternal(cad, cad.length).mkString(" ")
					
					
				}    
}