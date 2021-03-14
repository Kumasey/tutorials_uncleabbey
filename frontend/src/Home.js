import React, { Component } from 'react';
import AddAnimal from './AddAnimal';
import { Link } from 'react-router-dom';

export class Home extends Component {
  state = {
    animals: [],
    name: '',
    age: 0,
    specie: '',
  };
  componentDidMount() {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/animals');
        const { data: animals } = await res.json();
        this.setState({
          animals,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { name, age, specie } = this.state;
    const data = {
      age: Number(age),
      name,
      specie,
    };
    console.log(data);
    const addAnimal = async () => {
      try {
        const url = 'http://localhost:5000/animals';
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const respBody = await res.json();
        console.log(respBody.data.animal);
        this.setState({
          animals: [...this.state.animals, respBody.data.animal],
          age: 0,
          name: '',
          specie: '',
        });
      } catch (error) {
        console.log(error);
      }
    };
    addAnimal();
  };
  render() {
    const { name, age, specie, animals } = this.state;
    return (
      <div>
        <AddAnimal
          onSubmit={this.onSubmit}
          name={name}
          age={age}
          specie={specie}
          onChange={this.onChange}
        />
        <h1>List of Pets</h1>
        <ul>
          {animals && animals.length > 0
            ? animals.map(({ name, id }) => (
                <li key={id}>
                  <Link to={`/animals/${id}`}>{name}</Link>
                </li>
              ))
            : 'No animal found'}
        </ul>
      </div>
    );
  }
}

export default Home;
