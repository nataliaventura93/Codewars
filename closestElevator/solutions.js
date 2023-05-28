function elevator(left, right, call){
    var distancetoleft = Math.abs(left - call);
    var distancetoright = Math.abs(right - call);
    
    if (distancetoleft==distancetoright)
      return "right"
    else if (distancetoleft>distancetoright)
      return "right"
    else 
      return "left"
    
  }