import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';
import Form from './Components/Form';

class App extends Component {

  state = {
     foods: foodsJSON,
     onClick:false,

  };

  btnAddFood=()=>{

    this.setState({
      onClick:!this.state.onClick
    })
  }

  render () {
    return (
      <div className="App">
        <button className="button is-info" onClick={this.btnAddFood}>
          Add Food!
        </button>
        {this.state.onClick ? <Form/>:null}
        {this.state.foods.map((food)=> {
          return (
            <FoodBox key={food.name} foodName={food.name} 
            foodImg={food.image}
            foodQty={food.quantity}
            foodCalories={food.calories}
            />
            
          )
         
        })}
         <button onClick={this.AddFood}>Add Food!</button>
         console.log("click!")
        {/* <AddFood/> */}
      </div>
    );
  }
}

export default App;
