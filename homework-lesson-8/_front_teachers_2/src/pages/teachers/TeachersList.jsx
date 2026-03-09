import { useEffect, useState } from 'react'
import useTeachersApi from '../../hooks/useTeachersApi'
import TeacherCard from '../../components/teachers/TeacherCard'
import { useNavigate } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'

function TeachersList() {
    // Масив selectedTeachersIdList зберігає id вчителів, яких обрав користувач.
    const [selectedTeachersIdList, setSelectedTeachersIdList] = useState([])
    const navigate = useNavigate()

    // Тут ми використовуємо кастомний hook, який робить GET /api/teachers. Беремо список вчителів з беку
    const { data: teachersList, error, isLoading, fetchTeachers, deleteTeacher } = useTeachersApi()

    // При монтуванні компоненту викликаємо fetchTeachers(). Асинхронна юзефект для заповнення списку операція
    useEffect(() => { fetchTeachers() }, [fetchTeachers])

    const onSelect = (teacherId) => {
        //   Якщо вчитель вибраний то удаляєм
        if (selectedTeachersIdList.includes(teacherId))
            setSelectedTeachersIdList((prevList) =>
                prevList.filter((el) => el !== teacherId)
            )
        // А якщо не вибраний добавляєм
        // Получаем список id вчителів
        else setSelectedTeachersIdList((prevList) => [...prevList, teacherId])
    }

    const gotoMeetings = () => {
        //   Ліст вчителів для мітингу робим на основі сортування по вибраним id
        const teachersListForMeetings = teachersList.filter((teacher) =>
            selectedTeachersIdList.includes(teacher.id)
        )
        navigate(frontRoutes.navigate.meeting, {
            // оцей стейт момент вкусить вгибше
            state: {
                teachersListForMeetings,
            },
        })
    }

    

    let currentContent
    if (isLoading) currentContent = <div>Loading....</div>
    else if (error) currentContent = <div>Error</div>
    else
        currentContent = (
            <div>
                <button className='go-home' onClick={() => navigate(frontRoutes.navigate.teachers.add)}>Додати вчителя</button>
                {teachersList.length === 0 ? (
                    <div>Список порожній</div>
                ) : (
                    <div>
                        <div>
                            {/* Якщо хоть 1 вчитель вибран зьявляється кнопка Викликати вчителів */}
                            {!!selectedTeachersIdList.length && (
                                <button className='meeting-btn' onClick={gotoMeetings}>{`Викликати вчителів на збори (${selectedTeachersIdList.length})`}</button>
                            )}
                        </div>

                        {teachersList.map((teacher) => (
                            <TeacherCard
                                key={teacher.id}
                                teacher={teacher}
                                onSelect={onSelect}
                                onDelete={deleteTeacher}
                                isSelected={selectedTeachersIdList.includes(teacher.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        )

    return currentContent
}

export default TeachersList
