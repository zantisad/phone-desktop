import { useDispatch } from "react-redux"
import { deleteNote, isEdit } from "../../features/notes/noteSlice";

export const Note = ({id, title, description}) => {

    const dispatch = useDispatch();

    const handlerDeleteNote = () => {
        dispatch(deleteNote(id))
    }

    const handlerEditNote = () => {
        dispatch(isEdit(id))
    }


    return (
        <article className="bg-zinc-900 p-2 rounded-lg border-solid border-2 border-gray-500">
            <div onClick={handlerEditNote}>
                <h4 className="text-gray-300 break-words p-1 font-medium">{title}</h4>
                <p className="text-gray-300 break-words h-fit p-1 font-medium">{description}</p>
            </div>
            <button 
                className="text-gray-300 w-full pt-3 text-center font-bold"
                onClick={handlerDeleteNote}
            >
                Eliminar X
            </button>
        </article>
    )
}