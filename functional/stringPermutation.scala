object Solution {

    def main(args: Array[String]) {
        val sc = new java.util.Scanner (System.in);
        val n = sc.nextLine().toInt;
        fun(n,sc)
    }
  
    def fun(n: Int, sc:java.util.Scanner): Unit = {
        if(n>0) {
          var x = sc.nextLine();
          println(invertN1(x))
          fun(n-1, sc)
        }
    }
  
    def invertN1(str: String) = {
        val strBuilder = str.indices.foldLeft(StringBuilder.newBuilder)((acc,ind)=> if(ind%2==0){acc+=str(ind+1)+=str(ind)} else {acc})
  	 strBuilder.toString
    }
}
