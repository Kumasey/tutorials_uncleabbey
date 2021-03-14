import React, { Component } from 'react';

export class AddAnimal extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={this.props.age}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <label>Specie</label>
            <input
              type="text"
              name="specie"
              value={this.props.specie}
              onChange={this.props.onChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddAnimal;
