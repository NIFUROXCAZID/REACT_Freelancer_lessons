import { useState } from 'react'

// Універсальний обробник форм щоб 1 юз-стейт оброблять много інпутів
// В даному випадку щоб додавання чи редагування вчителів оброблять
export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({ ...prev, [name]: value }))
    }

    return {
        values,
        handleChange,
        setValues,
    }
}