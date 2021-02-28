const express = require('express');
const {
    addAnimal,
    getAllAnimals,
    getAnimalsById,
    editAnimals,
    deleteAnimal,
} = require ('../controllers');

const validatePostBody = require('../middlewares/validatePost');

const animalRoutes = new express.Router();

animalRoutes.get('/animals', getAllAnimals);
animalRoutes.post('/animals', validatePostBody, addAnimal);
animalRoutes.get('/animals/:id', getAnimalsById);
animalRoutes.delete('/animals/:id', deleteAnimal);
animalRoutes.patch('/animals/:id', editAnimals);

module.exports = animalRoutes;