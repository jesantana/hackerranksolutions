object Solution {

    def main(args: Array[String]) {
        def compression(cad: String) ={
	
          @annotation.tailrec 
          def groupEqualChars(x : String, y : List[String] = Nil) : List[String] = {
              if(x.size == 0) y.reverse 
              else {
                  val (l,r) = x.span(_ == x(0))
                  groupEqualChars(r, l :: y)
              }
          }

          def mergeCharList(list: List[String]) = {
            list.foldLeft(StringBuilder.newBuilder)((acc,current)=>
                                                    {
                                                      if(current.size>1) acc += current(0) ++= String.valueOf(current.length)
                                                                                                else acc += current(0)
                                                    })
          }
         mergeCharList(groupEqualChars(cad, List()))
        }
        
        val sc = new java.util.Scanner (System.in);
        val word = sc.nextLine();
        println(compression(word));
    }
}