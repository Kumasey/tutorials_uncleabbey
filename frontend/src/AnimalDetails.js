import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AnimalDetails extends Component {
  state = {
    animal: {},
  };
  componentDidMount() {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/animals/${this.props.match.params.id}`;
        const res = await fetch(url);
        const resp = await res.json();
        this.setState({
          animal: resp.data.animal,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }
  handleDelete = () => {
    const deleteAnimal = async () => {
      try {
        const url = `http://localhost:5000/animals/${this.props.match.params.id}`;
        const res = await fetch(url, {
          method: 'DELETE',
        });
        const resp = await res.json();
        alert(resp.message);
        this.props.history.push('/');
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };
    deleteAnimal();
  };
  render() {
    const { animal } = this.state;
    return (
      <div className="container">
        <div className="animal-details">
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
          <h3>Animal Details</h3>

          <div>
            <h5>Name: {animal ? animal.name : ''}</h5>
            <h5>Age: {animal ? animal.age : ''}</h5>
            <h5>Specie: {animal ? animal.specie : ''}</h5>
          </div>

          <div>
            <Link to={`/edit/${animal.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalDetails;
