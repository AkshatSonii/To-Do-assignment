import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    saveTasks([...notes, newNote]);
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    // Retrieve the notes from local storage
    const prevNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Filter out the note with the specified ID
    const updatedNotes = prevNotes.filter((noteItem, index) => index !== id);

    // Update local storage with the modified notes array
    saveTasks(updatedNotes);
    
    // Update the state with the filtered notes array
    setNotes(updatedNotes);

  }

  function loadTasks() {
		let loadedTasks = localStorage.getItem('notes');
    if(loadedTasks === 'undefined') return;
		let tasks = JSON.parse(loadedTasks);

		if (tasks) {
			setNotes(tasks);
		}
	}

	function saveTasks(tasks) {
		localStorage.setItem('notes', JSON.stringify(tasks));
	}



	useEffect(() => {
		loadTasks();
	}, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
