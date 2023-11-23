function sortCards(array) {
  let sortedCard = [];
  if (array.length !== 0) {
    sortedCard.push(array[0]);
  }

  let cardValues = { A: 0, T: 10, J: 11, Q: 12, K: 13 };

  for (let i = 1; i < array.length; i++) {
    //recorre las cartas desordenadas
    let card = array[i];
    let cardValue = 0;
    if (cardValues[card] === undefined) {
      cardValue = card;
    } else {
      cardValue = cardValues[card];
    }
    let inserted = false;
    for (let j = 0; j < sortedCard.length; j++) {
      //recorre las cartas ordenadas
      let sCard = sortedCard[j];
      let sCardValue = 0;
      if (cardValues[sCard] === undefined) {
        sCardValue = sCard;
      } else {
        sCardValue = cardValues[sCard];
      }
      if (cardValue < sCardValue) {
        sortedCard.splice(j, 0, card);
        inserted = true;
        break;
      }
    }
    if (inserted === false) {
      sortedCard.push(card);
    }
  }
  return sortedCard;
}
