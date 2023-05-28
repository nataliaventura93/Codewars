function friend(friends){
    const myFriends = [];
    for (let i = 0; i < friends.length; i++){
      let name = friends[i];
      if(name.length === 4){
        myFriends.push(name);
      }
        
  }
    return myFriends;
  }