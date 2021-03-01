const container = document.querySelector('.animal-container');

const fetchAnimals = async () => {
  const url = 'http://localhost:3000/animals';

  const res = await fetch(url);
  const {
    data: { animals },
  } = await res.json();
  //   console.log(animals);
  return animals;
};

window.addEventListener('load', () => {
  fetchAnimals().then((animals) => {
    return animals.map((animal) => displayAnimalToDom(animal));
  });
});

const displayAnimalToDom = (animal) => {
  const div = document.createElement('div');
  const name = document.createElement('p');
  const age = document.createElement('p');
  const specie = document.createElement('p');
  const hr = document.createElement('hr');
  name.innerHTML = animal.name;
  age.innerHTML = animal.age;
  specie.innerHTML = animal.specie;

  div.append(name);
  div.append(age);
  div.append(specie);
  div.append(hr);
  container.append(div);
};
