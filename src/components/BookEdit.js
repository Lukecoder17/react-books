import React, { useState } from "react";

function BookEdit(props) {
  const [title, setTitle] = useState(props.book.title);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(props.book.id, title);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
