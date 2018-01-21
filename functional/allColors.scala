object Solution {

    def main(args: Array[String]) {
        val n = io.StdIn.readInt
		val list = ( 1 to n ).map( (x) => io.StdIn.readLine )
							 .map((x) => allColors(x))
							.toList
        for (value <- list) println(if(value) "True" else "False")
        
    }
    
    
    def allColors(colors: String): Boolean = {
    	val listColors = colors.toList
    	
    	allColors1(listColors, 'R', 'G') && allColors1(listColors, 'Y', 'B')
    	
    }                                             //> allColors: (colors: String)Boolean
    
    
    def allColors1(colors: List[Char], col1: Char, col2: Char): Boolean = {
    	val (r1,r2) = colors.foldLeft((0,0)) ((acc, current) => {
    	
    		if(acc._1 == Integer.MAX_VALUE) acc
    		
    		val result = if(current.equals(col1)) (acc._1+1,acc._2+1)
    		else if(current.equals(col2)) (acc._1-1,acc._2-1)
    		else acc
    		
    		
    		if(Math.abs(result._1)>1) (Integer.MAX_VALUE,result._2)
    		else result
    	})
    	
    	
    	
    	r1 != Integer.MAX_VALUE && r2 == 0
    } 
}