import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;

// function App() {
//   return (
//     <center class="todo-container">
//       <h1>TODO App</h1>

//       <div class="container text-center">
//         <div class="row">
//           <div class="col-6">
//             <input type="text" placeholder="Enter Todo Here"></input>
//           </div>
//           <div class="col-4">
//             <input type="date"></input>
//           </div>
//           <div class="col-2">
//             <button type="button" class="btn btn-success">
//               Add
//             </button>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-6">Buy Milk</div>
//           <div class="col-4">4/10/2023</div>
//           <div class="col-2">
//             <button type="button" class="btn btn-danger">
//               Delete
//             </button>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-6">Go to college</div>
//           <div class="col-4">4/10/2023</div>
//           <div class="col-2">
//             <button type="button" class="btn btn-danger">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </center>
//   );
// }

// export default App;
