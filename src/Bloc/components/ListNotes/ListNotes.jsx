import { useSelector } from "react-redux"
import { Note } from "../Note/Note"

export const ListNotes = () => {

    const notes = useSelector(state => state.note.notes)

    return (
        <section className="w-full">
            <ul className="grid grid-cols-3 gap-3 auto-rows-auto">
                {
                    notes.map(note => (
                        <li key={note.id}>
                            <Note
                                id = {note.id} 
                                title={note.title} 
                                description={note.description}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}