const foods = [
    {id: 125223, food: 'Burgers', done: true},
    {id: 127904, food: 'Pizza', done: false},
    {id: 139608, food: 'Pasta', done: false},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = foods.findIndex(food => food.id ===id);
    foods.splice(idx, 1);
  }

  function create(food) {
    food.id= Date.now() % 1000000;
    food.done = false;
    foods.push(food);
  
  }

  function getOne(id) {
    id = parseInt(id);
    return foods.find(food => food.id === id);
  }
	
  function getAll() {
    return foods;
  }