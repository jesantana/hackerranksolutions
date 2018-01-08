def mingleString(str1: List[Char], str2: List[Char]): String = {
		(str1, str2) match  {
      case (List(), List()) => ""
      case (x :: xs, y :: ys) => String.valueOf(x) + String.valueOf(y) + mingleString(xs, ys)
    }
}


def mingleString(str1: String, str2: String): String = {
	val strBuilder = str1.indices.foldLeft(StringBuilder.newBuilder)((acc,ind)=> acc += str1(ind) += str2(ind))
     strBuilder.toString
}