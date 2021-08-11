import React, { Component } from 'react';

class AddFood extends Component {

    state = {
        name: "",
        calories: "",
        image: ""
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

          <label>Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />

          <label>Image:</label>
          <input type="image" name="image" src={this.state.image} alt="foodimg" onChange={this.handleChange} />
          <button>Add Food</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
