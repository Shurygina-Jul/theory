import React from "react";

const Car = (props) => (
  <div
    style={{
      border: "2px solid #e1e",
      width: "200px",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "10px",
      padding: "10px",
    }}
  >
    <h2> Car name: {props.name}</h2>
    <p>
      Year:
      <strong>{props.year}</strong>
    </p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDeleteName}>Delete name</button>
    <button onClick={props.onChangeTitle}>Change title</button>
  </div>
);

export default Car;

// export default () => (
//   <div>
//     <h2> This is car component</h2>

//   </div>
// );

// function Car() {
//     return (
//         <div>
//             <h2> This is car component</h2>
//         </div>
//     )
// }

// const Car = () => {
//   return (
//     <div>
//       <h2> This is car component</h2>
//     </div>
//   );
// };
