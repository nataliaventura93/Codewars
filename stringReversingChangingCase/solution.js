function changeCase (str) {
  let strC = ''
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    
    if (character == character.toUpperCase()) {
      
      character = character.toLowerCase();
    } else {
      character = character.toUpperCase();
      
    }
    
    strC += character;
  }
  return strC
}

function reverseAndMirror(s1, s2) {
  let separator = '@@@';
  let secondStringR = s2.split('').reverse().join('');
  let secondStringRC = changeCase(secondStringR)

  
  let secondString = s2;
  let secondStringC = changeCase(secondString)
  

  let firstStringR = s1.split('').reverse().join('');
  let firstStringRC = changeCase(firstStringR)
  

  let firstString = s1;
  let firstStringC = changeCase(firstString)
  
  return secondStringRC + separator + firstStringRC + firstStringC;
}