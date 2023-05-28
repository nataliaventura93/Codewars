function warnTheSheep(queue) {
    if (queue[queue.length -1]==="wolf"){
      return "Pls go away and stop eating my sheep";
    }
      
    else {
      let lastIndexPosition = queue.length -1;
      let sheepCount = 0;
      for (let i = lastIndexPosition; i >= 0; i--) {
        let animal = queue[i];
        if (animal==="wolf"){
           return "Oi! Sheep number " + sheepCount + "! You are about to be eaten by a wolf!";
  
        } else if (animal ==="sheep"){
          sheepCount++;
        }
          
      }
    }
      
  }