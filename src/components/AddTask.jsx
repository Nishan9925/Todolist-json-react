import axios from "axios";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!text.trim()) {
        return setError("Task cannot be empty");      
    }
    setError("")
    axios
    .post("http://localhost:3004/tasks", {text, status: "unstarted"})
    .then (res => {
        onAdd(res.data);
        setText("");
        // console.log(res.data);     
    })
    // console.log(text);    
  }
  return (
    <div>
      {error && <p style={{color: "red"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)} 
          placeholder="Add your task"
        />
        <button>Save</button>
      </form>
    </div>
  );
};
