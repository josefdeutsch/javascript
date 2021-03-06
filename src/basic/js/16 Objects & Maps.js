const gamesObj = {
    1: 'Citadels',
    2: 'Tzolkin'  
  };
  
  //-------------------
  
  const gamesMap = new Map([
    [1, 'Citadels'],
    [2, 'Tzolkin']
  ]);
  
  //-------------------
  
  console.log(gamesObj[1]);
  console.log(gamesObj['1']);
  
  gamesMap.get(1)
  gamesMap.get('1')
  
  //-------------------
  
  console.log(Object.prototype);
  
  const mapObject = {};
  console.log(mapObject['toString']);
  
  //-------------------
  
  const mapObject = Object.create(null);
  
  console.log(mapObject['toString']);
  
  //-------------------
  
  const gamesObj = {
    2: 'Tzolkin',
    1: 'Citadels',
  };
  
  const keys = Object.keys(gamesObj);
  
  const keyValuePairs = Object.entries(gamesObj);
  
  //-------------------
  
  const gamesMap = new Map([
    [2, 'Tzolkin'],
    [1, 'Citadels']
  ])
  
  const keys = gamesMap.keys();
  
  const keyValuePairs = gamesMap.entries();
  
  //-------------------
  
  gamesObj[1];
  
  gamesMap.get(1);
  
  //-------------------
  
  gamesMap.has(1);
  
  gamesMap.get(3);
  
  gamesObj.hasOwnProperty(1);
  
  //-------------------
  
  gamesMap.set(3, 'Catan'); 
  
  gamesObj[3] = 'Catan';
  
  //-------------------
  
  gamesMap.delete(1);
  
  delete gamesObl[1];
  
  //-------------------
  
  console.log(gamesMap.size);
  
  gamesMap.size === 0
  
  const size = Object.keys(gamesObj).length;
  console.log(size);
  
  //-------------------
  
  const gamesMap = new Map([
    [1, 'Citadels'],
    [2, 'Tzolkin']
  ]);
  
  gamesMap.forEach((value, key)=>{
     console.log(`${key} - ${value}`)
    });
  
  //-------------------
  
  const gamesObj = {
    1: 'Citadels',
    2: 'Tzolkin'  
  };
  
  Object
    .entries(gamesObj)
    .forEach(([key, value])=>{
      console.log(`${key} - ${value}`)
    });
  
  //-------------------
  
  const gamesObj = {
    1: 'Citadels',
    2: 'Tzolkin'  
  };
  
  const json = JSON.stringify(gamesObj);
  
  //-------------------
  
  const gamesMap = new Map([
    [1, 'Citadels'],
    [2, 'Tzolkin']
  ]);
  
  const json = JSON.stringify(gamesMap);