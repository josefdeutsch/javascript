/*{
    'name': 'The Cherry Orchard',
    'premiered' : 1904
  }
  
  //----------------------------
  
  {
    'author' : {
      'firstName' : 'Anton',
      'lastName': 'Cehov'
    }
  }
  
  //----------------------------
  
  [
    { 'name': 'Three Sisters' },
    { 'name': 'The Cherry Orchard' },
    { 'name': 'Ivanov' }
  ]
  
  //----------------------------
  
  const jsonText = '{'name': 'The Cherry Orchard'}';
  
  const play = JSON.parse(jsonText);*/
  
  //----------------------------
  
  const play = JSON.parse('');
  
  //----------------------------
  
  const play = {
    name : 'Ivanov',
    author : 'Chekhov'
  }
  
  const json = JSON.stringify(play);
  
  //----------------------------
  
  const author = {
    name: 'Anton Chekhov'
  }
  
  const play = {
    name : 'The Cherry Orchard',
    author
  }
  
  author.lastPlay = play;
  
  console.log(JSON.stringify(play));
  
  //----------------------------
  
  const play = {
    name : 'Platonov',
    author: 'Chekhov',
    getFormattedTitle(){
      return `${this.name} by ${this.author}`;
    }
  }
  
  console.log(JSON.stringify(play));
  
  //----------------------------
  
  const play = {
    [Symbol('name')] : 'Platonov',
    author: 'Chekhov',
  }
  
  console.log(JSON.stringify(play));
  
  //----------------------------
  
  const play = {
    name : 'Ivanov',
    author : {
     name: 'Chekhov'
    }
  }
  
  const clone = { ...play }
  console.log(clone)
  
  play.author.name = 'Anton Chekhov';
  console.log(clone)
  
  //----------------------------
  
  const play = {
    name : 'Ivanov',
    author : {
     name: 'Chekhov'
    }
  }
  
  const clone = { ...play }
  console.log(clone)
  
  play.author.name = 'Anton Chekhov';
  console.log(clone)
  
  //----------------------------
  
  const play = {
    name : 'Ivanov',
    author : {
      name: 'Chekhov'
    }
  }
  
  const clone = JSON.parse(JSON.stringify(play));
  
  play.author.name = 'Anton Chekhov';
  
  console.log(clone)