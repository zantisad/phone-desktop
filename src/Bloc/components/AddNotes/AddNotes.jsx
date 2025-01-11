import { useDispatch } from "react-redux"
import { addNote } from "../../features/notes/noteSlice";
import { v4 as uuid } from 'uuid';
import { useFormValues } from "../../hooks/formValues";

export const AddNotes = () => {

    const dispatch = useDispatch();

    const {formData, handlerChangeData} = useFormValues();

    const handlerSubmit = (event) => {
        event.preventDefault();
        if(!formData.title || !formData.description) return
        dispatch(addNote({...formData, id: uuid(), fecha: ""}))
    }

    return (
        <form className="flex flex-col items-center w-3/4" onSubmit={handlerSubmit}>
            <textarea 
                className="bg-zinc-900 text-white w-full outline-0 field-sizing-content resize-none px-4 py-1 rounded-t-lg border-solid border-2 border-b-0 border-gray-500 font-medium" 
                name="title" 
                placeholder="Titulo" 
                onChange={handlerChangeData}
                value={formData.title}
            />
            <textarea 
                className="bg-zinc-900 text-white w-full outline-0 field-sizing-content resize-none px-4 py-1 border-solid border-x-2 border-gray-500 font-medium"
                name="description" 
                placeholder="Descripcion"
                onChange={handlerChangeData}
                value={formData.description}
            />
            <button className="bg-zinc-900 text-gray-300 w-full py-2 rounded-b-lg border-solid border-2 border-t-0 border-gray-500 font-bold">
                Agregar +
            </button>
        </form>
    )
}