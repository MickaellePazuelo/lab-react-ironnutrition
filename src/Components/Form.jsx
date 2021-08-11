import React from 'react';



class Form extends React.Component {

    state = {
        name: "",
        calories: "",
        image: "",
        calories:"",
      }


    render() {

        return (
            
                <form onSubmit={this.handleFormSubmit}>
                    <div>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

          <label>Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />

          <label>Image:</label>
          <input type="image" name="image" src={this.state.image} alt="" onChange={this.handleChange} />
          <button Submit>Submit</button>
          </div>
        </form>
           
        )
    }
}

export default Form
