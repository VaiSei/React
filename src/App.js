import dataNotes from "./components/notes.json"
import NoteList from "./components/NoteList"
import CreateButton from "./components/CreateButton"
import CreateForm from "./components/CreateForm"
import { useStorage } from "./shared/hooks/useStorage"
import { useState } from "react";

function App() {
   const {setJsonItem,getJsonItem}=useStorage();
  
  if(!getJsonItem("notes")){
    setJsonItem("notes", dataNotes)
  } 
  const [notes, setNotes]=useState(getJsonItem("notes"));

  const addNote=(event)=>{
    event.preventDefault();

    const date = new Date();
    const newdata={
      id:Math.random().toString(36).slice(2),
      name:event.target.notename.value,
      date: date.toLocaleDateString(),
      discription:event.target.discription.value,
      };
      const newNote=[...notes, newdata];
      setJsonItem("notes", newNote)
      setNotes(newNote);
    
  };
  
  return (
    <div>
      <CreateButton  buttonName={"Add note"} > <CreateForm  onSubmit={addNote} /> </CreateButton>
      
       <NoteList notes={notes} /> 
    </div>
  );
}

export default App;
