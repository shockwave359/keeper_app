import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {db} from '../config/firebase';
import { addDoc, collection } from "firebase/firestore";



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const noteRef = collection(db, "notes");

  const addNote = async () => {
    await addDoc(noteRef, {
      title: note.title,
      content: note.content
    })
  }

  const [clicked, setClicked] = useState(false);

  function handleClicked(){
    setClicked(true);
  }

  function handleChange(event){
    const {name, value} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]: value};
    })
  }

  return (
    <div>
      <form className="create-note" onSubmit={(e) =>{e.preventDefault()}}>
        {clicked && <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />}
        <textarea onClick={handleClicked} value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={clicked ? 3 : 1} />
        <Zoom in={clicked}>
        <Fab onClick={() => {
          props.addNote(note);
          addNote();
          setNote({
            title:"",
            content:""
            });
        }}><AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
