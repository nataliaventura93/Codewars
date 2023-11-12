function highAndLow(numbers){
    let initialized = false
    
    let highest = 0
    let lowest = 0
    let numbersArr = numbers.split(' ');
    
    for (numberStr of numbersArr) {
      let number = parseInt(numberStr)
      if (initialized === false) {
        highest = number
        lowest = number
        initialized = true
      }
      if (number > highest) {
        highest = number
      }
      if (number < lowest) {
        lowest = number
      }
    }
    return highest.toString() + ' ' + lowest.toString();
  }