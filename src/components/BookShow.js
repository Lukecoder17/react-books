import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow(props) {
  const [showEdit, setShowEdit] = useState(false);

  function handleSubmit(id, newTitle){
    setShowEdit(false);
    props.onEdit(id, newTitle);
  }

  let content = <h3>{props.book.title}</h3>;
  if (showEdit === true) {
    content = <BookEdit book={props.book} onEdit={props.onEdit} onSubmit={handleSubmit}/>;
  }
  
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${props.book.id}/300/200`} alt="books"/>
      <div>
        {content}
      </div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button
          className="delete"
          onClick={() => props.onDelete(props.book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
