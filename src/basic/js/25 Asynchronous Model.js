function doOperation() {
    for (i = 0; i < 900719925; i++) {}
  }
  
  console.log('start')
  doOperation();
  console.log('end');
  
  //-------------------------
  
  function doLongOperation() {
    for (i = 0; i < Number.MAX_SAFE_INTEGER; i++) {}
  }
  
  doLongOperation();
  
  //-------------------------
  
  function max(a, b) {
    return a > b ? a : b;
  }
  
  const result = max(1, 2);
  console.log(result);
  
  //-------------------------
  
  const result = confirm('Are you sure?');
  console.log(result);
  
  //-------------------------
  
  setTimeout(() => {
    console.log('run')
  }, 3000);
  
  //-------------------------
  
  const timerid = setTimeout(() => {
      console.log('run')
  }, 3000);
  
  clearTimeout(timerid);
  
  //-------------------------
  
  setInterval(() => {
    console.log('run')
  }, 3000);
  
  //-------------------------
  
  const timerid = setInterval(() => {
    console.log('run')
  }, 3000);
  
  clearInterval(timerid);
  
  //-------------------------
  
  setTimeout(()=>{
   console.log(1);
  }, 0);
  
  console.log(2);
  
  //-------------------------
  
  const obj = {
    value : 1
  };
   
  console.log(obj); 
  obj.value = 100;
  
  console.log({...obj});
  console.log(JSON.stringify(obj));
  
  //-------------------------
  
  function getName(idx){
    return `Item ${idx}`;
  }
  
  const name = getName(1);
  
  //-------------------------
  
  function getName(idx){
    setTimeout(()=>{
      return `Item ${idx}`;
    }, 1000)
  }
  
  const name = getName(1);
  
  //-------------------------
  
  function getName(idx, callback){
    setTimeout(() => {
      callback(`Item ${idx}`);
    }, 1000)
  }
  
  function logResult(name){
    console.log(name);
  }
  
  getName(1, logResult);
  
  getName(1, name => {
    console.log(name);
  });
  
  //-------------------------
  
  function doOperation() {
    console.time()
    for (i = 0; i < 900719925; i++) {}
    console.timeEnd()
  }
  
  setTimeout(doOperation, 0);
  setTimeout(doOperation, 0);
  setTimeout(doOperation, 0);
  console.log('all started');