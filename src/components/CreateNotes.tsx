import React, { useRef, useState } from "react";
import { Note } from "../models/note.model";
interface ICreateNotes {
notes: Note[]
setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotes> = ({notes, setNotes}) => {

const [error, setError] = useState(false)

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
   if(titleRef.current?.value === "" || textRef.current?.value === ""){
    setError(true)
    return;
   }

   setError(false)

   setNotes([...notes, {
    id: (new Date()).toString(),
    title: (titleRef.current as HTMLInputElement).value,
    text: (textRef.current as HTMLTextAreaElement).value,
    color: (colorRef.current as HTMLInputElement).value,
    date: (new Date()).toString(),
   }]);
// titleRef.current!.value = "";
// textRef.current!.value = "";
// colorRef.current!.value = "#dfdfdf";
(titleRef.current as HTMLInputElement).value = "";
(textRef.current as HTMLTextAreaElement).value = "";
(colorRef.current as HTMLInputElement).value = "#dfdfdf"
    }

    return(
        <div className="m-4 p-4 border border-[#d4d4d4] rounded-lg">
            {error && <p className="bg-[#dc2626] py-4 px-6 mb-2 rounded-md inline-block text-white font-semibold">Enter the all fields</p>}
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-4">
                <label className="text-lg font-semibold">Title</label><br/>
                <input type="text" placeholder="Enter the note Title"
                ref={titleRef}
                 className="text-md border border-[#9333ea] py-2 px-3 rounded-lg w-full focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="text-lg font-semibold">Note Area</label><br/>
                <textarea placeholder="Enter your note here" rows={3} 
                ref={textRef}
                className="text-md border border-[#9333ea] py-2 px-3 rounded-lg w-full focus:outline-none "
                />
            </div>
            <div className="mb-4">
                <label htmlFor="colorInput" className="text-lg font-semibold">Select Note Color</label><br/>
                <input type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color"
                ref={colorRef}
                className="w-[5%]"
                />
            </div>
            
            <button type="submit"
            style={{background: "#9333ea", border: "none", padding: "8px 20px", fontWeight: "600", fontSize: "16px", borderRadius: "5px", margin: "10px 0px", color: "white"}}
            >Submit</button>
        </form>
        </div>
    )
}

export default CreateNotes;