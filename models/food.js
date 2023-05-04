const foods = [
    {id: 123456, food: 'Burgers', done: true},
    {id: 124567, food: 'Pizza', done: false},
    {id: 1, food: 'Pasta', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return foods;
  }