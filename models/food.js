const foods = [
    {id: 123456, food: 'Burgers', done: true},
    {id: 124567, food: 'Pizza', done: false},
    {id: 1, food: 'Pasta', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  
  function getOne(id) {
    id = parseInt(id);
    return foods.find(food => food.id === id);
  }
	
  function getAll() {
    return foods;
  }