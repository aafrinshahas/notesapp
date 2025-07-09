import React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";


interface INoteListProps{
notes: Note[]
setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}


const NodesList: React.FC<INoteListProps> = ({notes, setNotes}) => {
const handleDelete = (id: string) => {
    console.log(id)

    setNotes(notes.filter(note => note.id !== id))
}


    const renderNodeList = () => {
        return notes.map((note)=>{
            return <Notes key={note.id} note={note} handleDelete = {handleDelete} />
        })
    }
    return(
        <div className="p-4 mb-4">
           {renderNodeList()}
        </div>
    )
}

export default NodesList;