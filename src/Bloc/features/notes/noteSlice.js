import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        edit:{
            idNote: "",
            isDisplay:"none"
        },
        notes:[
    
            {
                id: 0,
                title: "Nota 1",
                description: "Descripcion",
                fecha: ""
            },
            {
                id: 1,
                title: "Nota 2",
                description: "Descripcion",
                fecha: ""
            }
        ]
    }


export const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        isEdit: (state, action) => {
            state.edit = {
                idNote: action.payload,
                isDisplay: "block"
            }
        },
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => (
                note.id !== action.payload
            ))
        },
        editNote: (state, action) => {
            console.log(action.payload.id)
            state.notes = state.notes.map(note => (
                note.id === action.payload.id
                ? {...note, title: action.payload.title, description: action.payload.description}
                : note
            ))
            state.edit = {
                idNote: action.payload.id,
                isDisplay: "none"
            }
        }

    }
})

export const { isEdit, addNote, deleteNote, editNote } = noteSlice.actions
export default noteSlice.reducer