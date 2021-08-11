import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';

class App extends Component {

  state = {
     foods: foodsJSON

  };


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
        
      </div>
    );
  }
}

export default App;
