import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { collection, doc, setDoc } from "firebase/firestore"; 

function App() {
  const [notesList, setNotesList] = useState([]);

  function onAdd(note){
    setNotesList(prevValue => {
      return [...prevValue, note]
    })
  }

  function onDelete(id){
    setNotesList(notesList.filter((note, index) => index !== id)) 
    // console.log(notesList);
    // setNotesList(prevNotes => {
      // console.log(prevNotes);
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id
  //     })
  // })
  }

  async function getNotes() {

  }

  return (
    <div>
      <Header />
      <CreateArea addNote={onAdd} />
      {notesList.map((note, index) => 
        <Note key={index} id={index} title={note.title} content={note.content} deleteNote={onDelete}/>
        )}
      <Footer />
    </div>
  );
}

export default App;
