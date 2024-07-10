import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
// import "./App.css";
// function App() {
// let foodItems = ["Dal", "Bhat", "Roti", "Apple", "Mango"];
// let foodItems = [];

// if (foodItems.length === 0) {
//   return <h3>I am hungry</h3>;
// }

// using ternary operator
// let hungryMsg = foodItems.length === 0 ? <h3>I am hungry</h3> : null;

// return (
//   <>
//     <center>
//       <h2>Healty Food Item Lists</h2>
{
  /* {hungryMsg} */
}
{
  /* {foodItems.length === 0 ? <h3>I am hungry</h3> : null} */
}

{
  /* logical operator */
}
//         {foodItems.length === 0 && <h3>I am hungry</h3>}

//         <ul className="list-group">
//           {foodItems.map((item, index) => (
//             <li key={item} className="list-group-item">
//               {item}-{index}
//             </li>
//           ))}
//         </ul>
//       </center>
//     </>
//   );
// }

// function App() {
//   return <h1>placement</h1>;
// }

// function App() {
//   return (
//     <React.Fragment>
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </React.Fragment>
//   );
// }

// export default App;

// implemention of props
function App() {
  let foodItems = ["Potato", "Tomato", "Bhat", "Roti", "Apple", "Mango"];

  // let foodItems = [];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
