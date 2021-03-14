import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddAnimal from './AddAnimal';

export class EditAnimals extends Component {
  state = {
    name: '',
    age: 0,
    specie: '',
  };
  componentDidMount() {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/animals/${this.props.match.params.id}`;
        const res = await fetch(url);
        const resp = await res.json();
        this.setState({
          name: resp.data.animal.name,
          age: resp.data.animal.age,
          specie: resp.data.animal.specie,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, age, specie } = this.state;
    const data = {
      age: Number(age),
      name,
      specie,
    };
    console.log(data);
    const editAnimal = async () => {
      const url = `http://localhost:5000/animals/${this.props.match.params.id}`;
      const res = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resp = await res.json();
      console.log(resp);
      this.props.history.push('/');
    };
    editAnimal();
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, age, specie } = this.state;
    return (
      <div>
        <Link to={`/animals/${this.props.match.params.id}`}>
          <button>Back</button>
        </Link>
        <h5>Edit Animal</h5>
        <AddAnimal
          onSubmit={this.onSubmit}
          name={name}
          age={age}
          specie={specie}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default EditAnimals;
