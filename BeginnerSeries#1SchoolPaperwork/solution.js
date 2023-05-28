function paperwork(n, m) {
    const pages = n;
    const alumn = m;
    let whitePages = pages * alumn;
    if( pages > 0 && alumn > 0){
      return whitePages; 
    }else {
      whitePages = 0; 
      return whitePages;
    }
    
  }