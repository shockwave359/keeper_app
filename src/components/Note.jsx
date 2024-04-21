import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import { doc, deleteDoc } from "firebase/firestore";

function Note(props) {

  // const deleteNote = async () => {

  // }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.deleteNote(props.id)
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
