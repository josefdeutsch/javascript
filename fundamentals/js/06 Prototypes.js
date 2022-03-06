let product = {
    name: 'lime'
  }
  
  product.__proto__ === Object.prototype;
  
  console.log(product.toString);
  console.log(product.toLocaleString);
  
  //--------------------
  
  let cartPrototype = {
    addProduct: function(product){
      if(!this.products){
       this.products = [product]
      } else {
       this.products.push(product);
      }
    },
    getTotalPrice: function(){
      return this.products.reduce((total, p) => total + p.price, 0);
    }
  }
  
  //--------------------
  

  
  //--------------------
  
  let cart = Object.create(cartPrototype);
  cart.addProduct({name: 'orange', price: 1.25});
  cart.addProduct({name: 'lemon', price: 1.75});
  
  cart.getTotalPrice();
  
  cart.__proto__ === cartPrototype; //Object setPrototype..
  
  Object.getPrototypeOf(cart) === cartPrototype;
  
  
  //--------------------
  
  let obj = {};
  
  Object.getPrototypeOf(obj) === Object.prototype;
  
  
  //--------------------
  
   cartPrototype = {
    products:[],
    addProduct: function(product){
        this.products.push(product);
    },
    getTotalPrice: function(){}
  }
  
  const cart1 = Object.create(cartPrototype);
  cart1.addProduct({name: 'orange', price: 1.25});
  cart1.addProduct({name: 'lemon', price: 1.75});
  
  cart1.getTotalPrice();
  
  const cart2 = Object.create(cartPrototype);
  cart2.getTotalPrice();
  
  //--------------------
  
   obj = {};
  console.log(obj.toString);
  
  delete obj.toString
  console.log(obj.toString);
  
  //--------------------
  
   obj = {};
  obj.toString = function(){};
  
   prototype = Object.freeze({
    toString : function (){
      return this.name;
    }
  });
  
   product = Object.create(prototype);
  
  product.name = 'lime';
  product.toString = function (){
     return `Name: ${this.name}`;
    };
  
  
  //--------------------
  
   prototype = {
    toString : function (){
      return this.name;
    }
  };
  
   product = Object.assign({ name: 'lemon'}, prototype);
  product.toString();
  
   product = Object.create(prototype);
  product.name = 'lemon';
  
  product.toString();
  
  //--------------------
  
  class Cart{
    #products
    constructor(){
      this.products = [];
    }
    
    addProduct(product){
      this.products.push(product);
    }
    
    getTotalPrice(){
      return this.products.reduce((total, p) => total + p.price, 0);
    }
    getNum() {
        // 👇️ Accessing private field
        return this.#products;
      }
  }
  
   cart = new Cart();
  cart.addProduct({name: 'orange', price: 1.25});
  cart.addProduct({name: 'lemon', price: 1.75});
  
  console.log(cart.getTotalPrice());
  
  
  console.log(cart.getTotalPrice());
  
  Object.getPrototypeOf(cart) === Cart.prototype;
  
  console.log(cart.products);
  
  //--------------------
  
  class Cart2{
    #products
  
    constructor(){
      this.#products = [];
    }
    
    addProduct(product){
      this.#products.push(product);
    }
    
    getTotalPrice(){
      return this.#products.reduce((total, p) => total + p.price, 0);
    }


 
  }
  
  cart.getNum();
  
  //--------------------
  
  class ExtendedArray extends Array {
   first() {
     return this[0];
    }
  }
  
  let arr = Array.of(1, 2, 3);
  
  //--------------------
  
   arr = ExtendedArray.of(1, 2, 3);
  arr.first();
  
  //--------------------
  
  function double(no){
    return no * 2;
  }
  
  const newArr = arr.map(double);
  newArr.first();