import { useFormValues } from "../../hooks/formValues"
import { useEditNote } from "../../hooks/editNote"

export const EditNote = () => {

    const { formData, setFormData, handlerChangeData } = useFormValues();
    const { edit, closeEdit } = useEditNote(formData, setFormData)

    return (
        <section className="bg-black/65 w-full h-full absolute top-0 rounder-[3rem]" style={{display:edit.isDisplay}}>
            <div className="w-full h-full flex items-center justify-center">
                <form className="flex flex-col items-center w-2/4">
                    <textarea 
                        className="bg-zinc-900 text-white w-full outline-0 field-sizing-content resize-none px-4 py-1 rounded-t-lg border-solid border-2 border-b-0 border-gray-500 font-medium" 
                        name="title"
                        value={formData?.title} 
                        onChange={handlerChangeData} 
                    />
                    <textarea 
                        className="bg-zinc-900 text-white w-full outline-0 field-sizing-content resize-none px-4 py-1 border-solid border-x-2 border-gray-500 font-medium"
                        name="description" 
                        value={formData?.description} 
                        onChange={handlerChangeData} 
                    />
                    <button 
                        className="bg-zinc-900 text-gray-300 w-full py-2 rounded-b-lg border-solid border-2 border-t-0 border-gray-500 font-bold"
                        onClick={closeEdit}
                    >
                        Close
                    </button>
                </form>
            </div>
        </section>
    )
}