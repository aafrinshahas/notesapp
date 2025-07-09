import { Note } from "../models/note.model"

interface INotes{
    note: Note
    handleDelete: (id: string) => void
}
  
const Notes: React.FC<INotes> = ({note, handleDelete}) => {
    return(
        <div style={{background: note.color, padding: "10px 20px", borderRadius: "20px", color: "#CCCCCC", marginBottom: "20px"}}>
            {/* <p style={{fontWeight: "700", fontSize: "22px", color: "white", marginBottom: "5px"}}>Note Card</p> */}
            <p style={{fontWeight: "500", fontSize: "17px", color: "white", marginBottom: "5px", textTransform: "uppercase"}}>{note.title}</p>
            <p style={{fontWeight: "500", fontSize: "17px", color: "white", marginBottom: "5px"}}>{note.text}</p>
            <p style={{fontWeight: "500", fontSize: "17px", color: "white", marginBottom: "5px"}}>{note.date}</p> 
            <button 
            style={{background: "#9333ea", border: "none", padding: "8px 20px", fontWeight: "600", fontSize: "16px", borderRadius: "5px", margin: "10px 0px", color: "white"}}
            onClick={()=> handleDelete(note.id)}
            >Delete</button>
        </div>
    )
}

export default Notes