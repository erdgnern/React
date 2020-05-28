import React, { Component } from "react";
import { getFoods } from "./foodlist";

class Foods extends Component {
  state = {
    foods: getFoods(),
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Preptime</th>
              <th>Serving-Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.foods.map((food) => (
              <tr key={food._id}>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>{food.preptime}</td>
                <td>{food.servingsize}</td>
                <td>{food.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Foods;
