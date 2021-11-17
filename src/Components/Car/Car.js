/* eslint-disable no-unused-expressions */
import React from "react";
// import Radium from "radium";
import "./Car.css";

class Car extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(" Car componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" Car shouldComponentUpdate", nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Car componentWillUpdate", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("Car componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Car componentWillUnmount");
  }
  render() {
    console.log("render car");
    const inputClases = ["input"];
    const style = {
      boxShadow: "0 4px 5px 0 #7878",
      backgroundColor: "lightblue",
      padding: 10,
      ":hover": {
        border: "1px solid #aaa",
        boxShadow: "0 4px 15px red",
        cursor: "pointer",
      },
    };

    this.props.name !== "" ? inputClases.push("blue") : inputClases.push("red");
    this.props.name.length > 4 ? inputClases.push("bold") : inputClases;

    return (
      <div className="car" style={style}>
        <h2> Car name: {this.props.name}</h2>
        <p>
          Year:
          <strong>{this.props.year}</strong>
        </p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClases.join(" ")}
        />
        <button onClick={this.props.onDeleteName}>Delete card</button>
        <button onClick={this.props.onChangeTitle}>Change title</button>
      </div>
    );
  }
}
export default Car;
// const Car = (props) => {
//   const inputClases = ["input"];
//   const style = {
//     boxShadow: "0 4px 5px 0 #7878",
//     padding: 10,
//     ":hover": {
//       border: "1px solid #aaa",
//       boxShadow: "0 4px 15px red",
//       cursor: "pointer",
//     },
//   };

//   props.name !== "" ? inputClases.push("blue") : inputClases.push("red");
//   props.name.length > 4 ? inputClases.push("bold") : inputClases;

//   return (
//     <div className="car" style={style}>
//       <h2> Car name: {props.name}</h2>
//       <p>
//         Year:
//         <strong>{props.year}</strong>
//       </p>
//       <input
//         type="text"
//         onChange={props.onChangeName}
//         value={props.name}
//         className={inputClases.join(" ")}
//       />
//       <button onClick={props.onDeleteName}>Delete card</button>
//       <button onClick={props.onChangeTitle}>Change title</button>
//     </div>
//   );
// };

// function Car(props) {
//   const inputClases = ["input"];
//   if (props.name !== "") {
//     inputClases.push("blue");
//   } else {
//     inputClases.push("red");
//   }
//   if (props.name.length > 4) {
//     inputClases.push("bold");
//   }
//   const style = { boxShadow: "0 4px 5px 0 #7878", padding: 10 };

//   return (
//     <div className="car" style={style}>
//       <h2> Car name: {props.name}</h2>
//       <p>
//         Year:
//         <strong>{props.year}</strong>
//       </p>
//       <input
//         type="text"
//         onChange={props.onChangeName}
//         value={props.name}
//         className={inputClases.join(" ")}
//       />
//       <button onClick={props.onDeleteName}>Delete card</button>
//       <button onClick={props.onChangeTitle}>Change title</button>
//     </div>
//   );
// }

// export default () => (
//   <div>
//     <h2> This is car component</h2>

//   </div>
// );

// const Car = () => {
//   return (
//     <div>
//       <h2> This is car component</h2>
//     </div>
//   );
// };
