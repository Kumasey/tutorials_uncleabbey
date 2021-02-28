const express = require('express');
const animalRoutes = require('./animals');

const allRoutes = new express.Router();

allRoutes.use(animalRoutes);

module.exports = allRoutes;