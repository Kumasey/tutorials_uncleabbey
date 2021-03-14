const successResponse = require('../utils/successResponse');

const animals = [
  {
    id: 1,
    name: 'Dog',
    specie: 'Gary',
    age: 15,
  },
  {
    id: 2,
    name: 'Cat',
    specie: 'Margay',
    age: 10,
  },
  {
    id: 3,
    name: 'Goat',
    specie: 'Damascus',
    age: 8,
  },
  {
    id: 4,
    name: 'Sheep',
    specie: 'Ovis',
    age: 9,
  },
  {
    id: 5,
    name: 'Horse',
    specie: 'Belgian',
    age: 12,
  },
];

const addAnimal = (req, res) => {
  const { age, name, specie } = req.body;
  const data = {
    id: animals.length + 1,
    name,
    specie,
    age,
  };
  animals.push(data);
  return successResponse(res, 201, 'ANimal added successfully', {
    animal: data,
  });
};

const getAllAnimals = (req, res) => {
  return successResponse(res, 200, 'animal retrieved successfully', animals);
};

const getAnimalsById = (req, res, next) => {
  const animal = animals.find((item) => item.id === Number(req.params.id));
  if (animal) {
    return successResponse(res, 200, 'animal retrieved successfully', {
      animal,
    });
  }

  return next({
    statusCode: 404,
    message: 'animal not found',
  });
};

const editAnimals = (req, res) => {
  const animal = animals.find((item) => item.id === Number(req.params.id));
  if (!animal) {
    return next({
      statutsCode: 404,
      message: 'animal not found',
    });
  }
  animal.name = req.body.name;
  animal.age = req.body.age;
  animal.specie = req.body.specie;
  return successResponse(res, 200, 'animal updated successfully', {
    animal,
  });
};

const deleteAnimal = (req, res) => {
  const index = animals.findIndex((item) => item.id === Number(req.body.id));

  animals.splice(index, 1);

  return successResponse(res, 200, 'An animal record has been deleted');
};

module.exports = {
  addAnimal,
  getAllAnimals,
  getAnimalsById,
  editAnimals,
  deleteAnimal,
};
