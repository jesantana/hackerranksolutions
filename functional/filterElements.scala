object Solution {

    def main(args: Array[String]) {
       
         val n = io.StdIn.readInt
		val list = ( 1 to 2*n ).map( (x) => io.StdIn.readLine )
									.map((x) => x.split(" "))
									.grouped(2)
									.map((current) => findRepeated(current(1).toList,current(0)(1).toInt))
                                    .toList
        
        
			
        list.foreach(current => println(current.mkString))
    }
    
    def findRepeated(array: List[String], times: Integer) = {
         val result:List[String] = array
        							.zipWithIndex
        							.groupBy(pair => pair._1)
        							.filter(entry => entry._2.length>=times)
        							.toList
        							.sortBy(entry => entry._2.head._2.toInt)
        							.map(entry => entry._1)

        if(result.size == 0) List("-1")
        else List(result.mkString(" "))
		}    
    
     
}