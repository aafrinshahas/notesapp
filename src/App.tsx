
import { useState } from "react";
import {Note} from './models/note.model';
import Header from "./components/Header";
import NodesList from "./components/NodesList";
import CreateNotes from "./components/CreateNotes";



function App() {

  const [notes, setNotes] = useState<Note[]>([])
  return (
<div className="">
  <Header/>
 <NodesList notes={notes} setNotes={setNotes}/>
 <CreateNotes notes={notes} setNotes={setNotes}/>
</div>
  );
}

export default App;
