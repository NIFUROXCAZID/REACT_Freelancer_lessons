import { useEffect, useId } from 'react'
import useForm from '../../hooks/useForm'
import apiRoutes from '../../api/apiRoutes'
import { useNavigate, useParams } from 'react-router'
import frontRoutes from '../../router/frontRoutes'
import useFetch from '../../hooks/useFetch'

function ProductForm() {
    const nameId = useId()
    const subjectId = useId()
    const photoId = useId()

    // Визначає напис кнопки за наявності id в url
    const { id } = useParams()
    const isEditing = !!id
    const saveButtonLabel = isEditing ? 'Зберегти зміни' : 'Створити'

    // Юз форм оток хук кастомний
    const { values, handleChange, setValues } = useForm({
        name: '',
        subject: '',
        photo: '',
    })

    // Якщо редагування — треба підтягнути вчителя і всінути значення в поля форми сразу
    const navigate = useNavigate()
    const url = isEditing ? apiRoutes.getTeacherById(id) : ''
    const {
        data: fetchTeachers,
        error,
    } = useFetch(url, { skip: !isEditing })

    useEffect(() => {
        // если редагування то отримали вчителя по id і заповнили його в поля форми для редагування створення
        if (fetchTeachers) {
            setValues(fetchTeachers)
        }
    }, [fetchTeachers])

    async function submitHandle(e) {
        e.preventDefault()

        // опреділяєм чи це створення вчителя чи його апдейт
        const url = isEditing ? apiRoutes.updateTeacher(id) : apiRoutes.addTeacher
        const method = isEditing ? 'PUT' : 'POST'
        await fetch(url, {
            method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values),
        })

        navigate(frontRoutes.navigate.teachers.root)
    }
    
    // useEffect: Автоматично заповнює форму, якщо ми редагуємо вчителя.
    // submitHandle: Відправляє форму на сервер(створює або оновлює вчителя) і повертає на список.
    return (
        <div>
            <h1>TeachersForm</h1>
            {!!error && <div>Error!</div>}
            {!error && (
                <form onSubmit={submitHandle}>
                    <div>
                        <label htmlFor={nameId}>Імья вчителя</label>
                        <input type="text" name="name" id={nameId} value={values.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor={subjectId}>Фото вчителя </label>
                        <input type="text" name="subjectId" id={subjectId} value={values.subject} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor={photoId}>Предмет вчителя</label>
                        <input type="text" name="photoId" id={photoId} value={values.photo} onChange={handleChange}/>
                    </div>
                    <button>{saveButtonLabel}</button>
                </form>
            )}
        </div>
    )
}

export default ProductForm