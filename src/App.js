import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { delete_todo, edit_todo, post_todo } from "./redux/Action/TodoActions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newtodo, setNewTodo] = useState("");
  const [data, setData] = useState("");
  const [click, setClick] = useState(false);
  const [todoId, setTodoId] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button
        onClick={() =>
          newtodo.length > 0
            ? dispatch(post_todo(newtodo))
            : alert("pls enter a todo")
        }
      >
        {" "}
        Add todo
      </button>

      {todos.map((el) => (
        <div key={el.id}>
          {click === true && el.id === todoId ? (
            <div>
              <input
                type="text"
                onChange={(e) => setData(e.target.value)}
              ></input>
              <button
                onClick={() =>
                  dispatch(edit_todo(el.id, data), setClick(false))
                }
              >
                Save
              </button>
            </div>
          ) : (
            <h5>{el.text}</h5>
          )}

          <button onClick={() => dispatch(delete_todo(el.id))}>delete</button>
          <button onClick={() => dispatch(setClick(true), setTodoId(el.id))}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
