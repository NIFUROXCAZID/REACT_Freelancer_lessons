import { useEffect, useId } from 'react'
import useForm from '../../hooks/useForm'
import apiRoutes from '../../api/apiRoutes'
import { useNavigate, useParams } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import { useTeacher } from '../../hooks/useTeachersApi'


function TeachersEdit() {
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
    // const url = isEditing ? apiRoutes.getTeacherById(id) : ''
    const { teacher, isLoading, error } = useTeacher({ id, skip: !isEditing })
    
    useEffect(() => {
        console.log("teacher:", teacher)
        if (teacher) {
            setValues({
                name: teacher.name || '',
                subject: teacher.subject || '',
                photo: teacher.photo || '',
            })
        }
    }, [teacher, setValues])

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
            {!!isLoading && <div>Званатажується</div>}
            {!!error && <div>Помилка</div>}
            {!isLoading && !error && (
                <form onSubmit={submitHandle}>
                    <div>
                        <label htmlFor={nameId}>Імья вчителя</label>
                        <input type="text" name="name" id={nameId} value={values.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor={subjectId}>Предмет вчителя</label>
                        <input type="text" name="subject" id={subjectId} value={values.subject} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor={photoId}>Фото вчителя </label>
                        <input type="text" name="photo" id={photoId} value={values.photo} onChange={handleChange} />
                    </div>
                    <button className='go-home'>{saveButtonLabel}</button>
                </form>
            )}
        </div>
    )
}

export default TeachersEdit
