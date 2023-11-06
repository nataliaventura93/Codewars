function getCount(str) {
    let numberVowels = 0
    for (vowel of str) {
      if(vowel === 'a' || vowel ==='e'|| vowel === 'i' ||
        vowel === 'o' || vowel === 'u') {
        numberVowels+= 1
      }
    }
    
    return numberVowels;
  }