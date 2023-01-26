import React, { useState } from "react";

function BookCreate(props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onCreate(title);
    setTitle("");
  }

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
