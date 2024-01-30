function chessboard(size = 8){
    let line = "";
  
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if((i + j) % 2 == 0){
                line += " ";
            } 
            else{
                line += "#";
            }	  
        } 
        console.log(line);
        line = "";
    }	
  }
  
  chessboard();