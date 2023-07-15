import React, { useState } from "react";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([
    "Walk the dog",
    "Make the bed",
    "Do laundry",
  ]);
  const [userInput, setUserInput] = useState("");

//   let addTodo = (onKeyDownEvent) => {
//     if (onKeyDownEvent.key === "Enter") {
//       newTodoList = [...todos, userInput];
//       // with out the dot, dot, dot (aka spread operator)
//       // [["Walk the dog", "Make the bed", "Do laundry"], userInput]
//       // with the spread operator
//       // ["Walk the dog", "Make the bed", "Do laundry", userInput]
//       setTodos(newTodoList);
//       setUserInput("");
//     }
// }
const addTodo = (onKeyDownEvent) => {
    if (onKeyDownEvent.key === "Enter") {
      const newTodo = [...todos, userInput];
      setTodos(newTodo);
      setUserInput("");
    }
  };

    let removeTodo = (index) => {
      const newTodoList = todos.filter((item, i) => i != index);
      // index = index of todo that needs to deleted
      // i is the index of each item of the array
      setTodos(newTodoList);
    };

    return (
      <div className="text-center">
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="what do you need to do?"
          onChange={(event) => setUserInput(event.target.value)}
          onKeyDown={(event) => addTodo(event)}
        />
        <ul>
          {/* we use curly bracket to say we are doing js */}
          {todos.map((todo, index) => {
            return (
			<li key={index}>
              {todo}
              <div onClick={removeTodo(index)}>x</div>
            </li>
			)
          })}
        </ul>
      </div>
    );
  };

export default Home;
