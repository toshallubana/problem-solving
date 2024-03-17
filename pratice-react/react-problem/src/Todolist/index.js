import { useRef, useState } from "react";
import "./todo.css";

const Items = ({ text, completed, id, updateCompleted, deleteTodo }) => {
  return (
    <div className="items">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div className={completed ? "strike" : ""}>{text}</div>
      <div className="close" onClick={() => deleteTodo(id)}>X</div>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleKeyPress = (e) => {
    if (inputRef.current.value === "") return;
    setTodos([
      ...todos,
      { text: inputRef.current.value, completed: false, id: Date.now() },
    ]);
    inputRef.current.value = "";
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter)

  };

  return (
    <div className="container">
      <div className="inputWrapper">
        <input className="input" type="text" ref={inputRef} />
        <button className="adddButton" onClick={(e) => handleKeyPress(e)}>
          Add +
        </button>
      </div>

      {todos.map((e) => {
        return (
          <Items
            {...e}
            key={e.id}
            updateCompleted={handleCompleted}
            deleteTodo={handleDelete}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
