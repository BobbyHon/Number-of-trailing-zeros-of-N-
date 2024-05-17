function zeros (n) {
    let power = 1
    let answer = 0
    
    while (true){
      if (Math.pow(5, power) <= n)
        {
          answer += Math.floor(n / Math.pow(5, power))
          ++power
        }
      else{
        return answer
      }
    }
  }