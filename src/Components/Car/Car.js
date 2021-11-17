/* eslint-disable no-unused-expressions */
import React from "react";
import Radium from "radium";
import "./Car.css";

const Car = (props) => {
  const inputClases = ["input"];
  const style = {
    boxShadow: "0 4px 5px 0 #7878",
    padding: 10,
    ":hover": {
      border: "1px solid #aaa",
      boxShadow: "0 4px 15px red",
      cursor: "pointer",
    },
  };

  props.name !== "" ? inputClases.push("blue") : inputClases.push("red");
  props.name.length > 4 ? inputClases.push("bold") : inputClases;

  return (
    <div className="car" style={style}>
      <h2> Car name: {props.name}</h2>
      <p>
        Year:
        <strong>{props.year}</strong>
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClases.join(" ")}
      />
      <button onClick={props.onDeleteName}>Delete card</button>
      <button onClick={props.onChangeTitle}>Change title</button>
    </div>
  );
};
export default Radium(Car);
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
