import React, { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [title, setTitle] = useState('')


  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else { alert('Empty todo not allowed') }

  };

  const onChange = e => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        size="64"
        maxLength="64"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit" value="Submit" >
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
      </button>
    </form>
  )
}
export default InputTodo