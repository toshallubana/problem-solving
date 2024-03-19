import { useRef, useState } from "react";
import "./todo.css";

const Items = ({
  text,
  completed,
  id,
  updateCompleted,
  deleteTodo,
  updatedText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="items">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => !completed && setEdit(true)}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value)
            }}
            onBlur={() => {
              setEdit(false);
              updatedText(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => deleteTodo(id)}>
        X
      </div>
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
    setTodos(filter);
  };

  const updatedText = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text
      }
      return e;
    });

    setTodos(updatedList);
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
            updatedText={updatedText}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
