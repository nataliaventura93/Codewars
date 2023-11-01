function findDup( arr ){
    let duplicateValue;
    for (number of arr) {
      let ocurrences = 0;
      for (numberIn of arr) {
        if (numberIn === number) {
          ocurrences+= 1;  
        }
        if (ocurrences === 2) {
          return number;
        }
      }
    }
    return duplicateValue;
  }