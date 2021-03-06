function outer(){
    function inner(){}
  }
  
  //--------------------
  
  function outer(){
    const x = 1;
    function inner(){
      console.log(x);
    }
  }
  
  //--------------------
  
  function outer(){
    const x = 1;
    return function inner(){
      console.log(x);
    }
  }
  
  const log = outer();
  log();
  log();
  
  //--------------------
  
  function outer(){
    const x = 1;
    setTimeout(function inner(){
      console.log(x);
    }, 4000);
  }
  
  outer();
  
  //--------------------
  
  {
    const x = 1;
    setTimeout(function inner(){
      console.log(x);
    }, 4000);
  }
  
  //--------------------
  
  function createRateIt(){
    const ratings = [];
    
    return function(rating){
      if(rating){
        ratings.push(rating);
      }
      
      const total = ratings.reduce((x, y) => x + y);
      return total / ratings.length;
    }
  }
  
  const rateIt = createRateIt();
  rateIt(5);
  rateIt(3);
  rateIt(4);
  
  const avgRating = rateIt();