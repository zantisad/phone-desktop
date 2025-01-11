import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editNote } from "../features/notes/noteSlice"

export const useEditNote = (newData, setFormData) => {

    const dispatch = useDispatch()
    const { edit, notes } = useSelector(state => state.note)

    const closeEdit = (event) => {
            event.preventDefault()
            if(!newData.title || !newData.description) return
            dispatch(editNote(newData))
        }
    
    const getDataToEdit = () => {
        const noteFilter = notes.filter(note => (
            note.id === edit.idNote
        ))
        setFormData(noteFilter[0])
    }

    useEffect(() => {
        getDataToEdit()
    }, [edit.idNote])

    return {
        edit,
        closeEdit
    }
}