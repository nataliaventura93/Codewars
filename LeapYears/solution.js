function isLeapYear(year) {
  if (year >= 1600 && year <= 4000) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }
}
