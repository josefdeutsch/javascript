let product = {
    name: 'apple',
    category: 'fruits',
    price: 1.99
  }
  
  //---------------------
  
   product = {
    name: 'kiwi',
  }
  
  product.category = 'fruits';
  delete product.category;
  
  //---------------------
  
   product = {
    'english name' : 'papaya'
  }
  
  product['english name']
  
  //---------------------
  
   product = {
    name: 'lemon',
    category: 'fruits',
  }
  
  const categoryKey = {
    toString(){
      return 'fruits'
    }
  }
  const game = [categoryKey];
  
  //---------------------
  
  let name = 'apple';
  let category = 'fruits';
  let price = 1.99;
  
   product = {
    name: name,
    category: category,
    price: price
  }
  
  //---------------------
  
   name = 'apple';
   category = 'fruits';
   price = 1.99;
  
   product = {
    name,
    category,
    price
  }
  
  //---------------------
  
   product = {
    name: 'apple',
    category: 'fruits',
    price: 1.99,
    nutrients : {
     carbs: 0.95,
     fats: 0.3,
     protein: 0.2
   }
  }
  
  product.nutrients.carbs
  
  //---------------------
  
   product = {
    name : 'papaya',
    toString: function(){
      return this.name;
    }
  };
  
  product.toString();
  
  //---------------------
  
  const productsMap = {
    1 : { name: 'apple'},
    2 : { name: 'kiwi'},
    3 : { name: 'papaya'}
  }
  
  //---------------------
  
   product = Object.freeze({
   name: 'lemon',
  });
  
  product.category = 'fruits';
  product.name = 'orange';
  
  Object.isFrozen(product)
  
  //---------------------
  
   product = {
    name : 'pineapple',
    category: 'fruits',
    toString: function(){
      return this.name;
    }
  };
  
  let keys = Object.keys(product);
  let values = Object.values(product);
  
  //---------------------
  
   product = {
    name : 'pineapple',
    category: 'fruits',
    toString: function(){
      return this.name;
    }
  };
  
   keyValuePairs = Object.entries(product);
  
  //---------------------
  
   keyValuePairs = [
   ['name', 'pineapple'],
   ['category', 'fruits'],
  ]
  
   product = Object.fromEntries(keyValuePairs);
  
  //---------------------
  
   product = {
    name : 'pineapple',
    category: 'fruits',
    toString: function(){
      return this.name;
    }
  };
  
   keys = Object.keys(product);
  
  //---------------------
  
  Object.defineProperty(product, 'toString', {
    enumerable: false
  });
  
   keys = Object.keys(product);
  //It's a lot more boring than something that should be visualized.
  //There is literally an attribute on all properties called "enumerable." When it is set to false the for..in method will skip that property, pretend it doesn't exist.
  // https://stackoverflow.com/questions/17893718/what-does-enumerable-mean
  //---------------------
  
  const object1 = {};

  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: true
  });
  
  object1.property1 = 77;
  // throws an error in strict mode
  
  console.log(object1.property1);

  Object.defineProperty(product, 'toString', {
      enumerable: false,
      writable: false
  });
  
  product.toString = undefined;
  
  //---------------------
  
   product = {
    name: 'peach',
    category: 'fruits',
  };
  
  let hasRight = true;
  let once = true;
  const propName = 'name';
  
  function Ab(n){
    this.name = n;
}

  Object.defineProperty(Ab.prototype, "name", {
    //enumerable: true, //maybe?
    
    get: function(){ 
    
            if(hasRight){
                return product[_name];
              } else {
                throw `${propName} no access`;
              }
    },
    set: function(value){ 
        _name = value }
});


  console.log(product.name)
  
  //---------------------
  
  const productMethods = {
    toString: function(){
      return this.name;
    }
  };
  
   product = {
    name: 'blueberry',
    category: 'fruits'
  };
  
  Object.assign(product, productMethods);
  product.toString()
  
  //---------------------
  
  let newProduct = Object.assign({}, product, productMethods);
  
  newProduct.toString()
  
   product = {
    name: 'lime'
  };
  
   product = {
    name: 'blueberry',
    category: 'fruits'
  };
  
  Object.assign(product, productMethods);
  product.toString()
  
  //---------------------
  
   newProduct = Object.assign({}, product, productMethods);
  
  newProduct.toString()
  
  //---------------------
  
   product = {
    name: 'lime'
  };
  
   newProduct = Object.assign({}, product);
  product === newProduct
  

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty