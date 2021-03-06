const series = {
    title: 'Star Trek',
    genre: 'SF'
  }
  
  //---------------------
  
  const obj = {};
  obj.__proto__ === Object.prototype;
  
  //---------------------
  
  const sum = function(x,y){ return x + y }
  
  //---------------------
  
  function startsWith(text){
    return function(name){
      return name.startsWith(text);
    }
  }
  
  const games = ['Fornite', 'Overwatch', 'Valorant'];
  const newGames = games.filter(startsWith('Fo'));
  console.log(newGames);
  
  //---------------------
  
  function createCounter(){
    let x = 0;
    return function(){
      x = x + 1;
      return x;
    }
  }
  
  const count = createCounter();
  count();
  count();
  count();
  
  //---------------------
  
  const upperText = 'Minecraft'.toUpperCase();
  
  //---------------------
  
  const dto = { value: 1 };
  
  //---------------------
  
  const dto = { value: 'text'}
  
  //---------------------
  
  function getName(value){
    return value?.name;
  }
  
  getName({name: 'Darth Vader'});
  
  getName(null);
  getName(0);
  getName('');
  
  //---------------------
  
  const gamesArr = [
    { name: 'Tzolkin' }, 
    { name: 'Catan' }
  ];
  
  gamesArr.map(getName);
  
  const moviesArr = [
   { name: 'Revenge of the Sith', genre: 'fantasy' }, 
   { name: 'A New Hope', genre: 'fantasy' }
  ];
  
  moviesArr.map(getName);