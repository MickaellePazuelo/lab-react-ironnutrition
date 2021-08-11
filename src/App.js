import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';

class App extends Component {

  state = {
     foods: foodsJSON

  };

AddFood = () => {
  this.setState({

  })
}
  render () {
    return (
      <div className="App">
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
