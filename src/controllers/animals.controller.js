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
    return res.status(201).json({
        animal: data,
    });
};

const getAllAnimals = (req, res) => {
    return res.json({
        animals,
    });
};

const getAnimalsById = (req, res) => {
    const animal = animals.find((item) => item.id === Number(req.params.id));
    if(animal){
        return res.json({
            animal,
        });
    };
    return res.status(404).json({
        error: 'animal not found',
    });
};

const editAnimals = (req, res) => {
    const animal = animals.find((item) => item.id === Number(req.params.id));
    if(!animal) {
        res.status(404).json({
            error: 'animal not found',
        });
    };
    animal.name = req.body.name;
    animal.age = req.body.age;
    animal.specie = req.body.specie;

    return res.status(200).json({
        animal,
    });
};

const deleteAnimal = (req, res) => {
    const index = animals.findIndex((item) => item.id === Number(req.body.id));

    animals.splice(index, 1);

    return res.status(200).json({
        message: 'An animal record has been deleted',
    });
};

module.exports = {
    addAnimal,
    getAllAnimals,
    getAnimalsById,
    editAnimals,
    deleteAnimal,
};