import React, { Component } from "react";
import "./App.css";
import Car from "./Components/Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 },
    ],
    pageTitle: "React components",
    showCars: false,
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };
  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    });
  };
  toggleCarsHandler = () => {
    console.log("toggle");
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeNameHandler(name, index) {
    console.log(name, index);
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }
  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  render() {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10px",
          width: "360px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.changeTitleHandler.bind(this, "Changed!!!")}>
          Change title
        </button>
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onDeleteName={this.deleteHandler.bind(this, index)}
                  onChangeName={(event) => {
                    this.onChangeNameHandler(event.target.value, index);
                  }}
                  onChangeTitle={() => {
                    this.changeTitleHandler(car.name);
                  }}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
