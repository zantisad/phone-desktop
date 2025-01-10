import { useState } from "react"

export const useFormValues = () => {
    const [formData, setFormData] = useState({})

    const handlerChangeData = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    return {
        formData,
        setFormData,
        handlerChangeData
    }
}