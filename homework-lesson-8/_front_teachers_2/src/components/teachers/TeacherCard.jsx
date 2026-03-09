import { useNavigate } from "react-router"
import frontRoutes from '../../routes/frontRoutes'
import styles from './TeacherCard.module.css'
function TeacherCard({ teacher, onSelect, isSelected, onDelete }) {
    const navigate = useNavigate()

    const onDetailsClick = () => {
        // navigate(frontRoutes.navigate.teachers.detail(teacher.id))
        // Краще легше передать тічера через стейт ніж робить запит
        navigate(frontRoutes.navigate.teachers.detail(teacher.id), {
            state: { teacher }
        })
    }

    const onEditClick = () => {
        navigate(frontRoutes.navigate.teachers.edit(teacher.id))
    }

    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <img src={teacher.photo} alt="teacher" />
                <div>
                    <div>{teacher.name}</div>
                    <div>{teacher.subject}</div>
                </div>
            </div>
            <div className={styles.section2}>
                {onSelect ? (
                    <button onClick={() => onSelect(teacher.id)}>
                        {isSelected ? 'Is selected' : 'Select'}
                    </button>
                ) : null}
                <button onClick={onDetailsClick}>Details</button>
                <button onClick={onEditClick}>Edit</button>
                <button onClick={() => onDelete(teacher.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TeacherCard

// Для видалення треба 
// Тепер потрібно зробити 3 речі:
// 1️⃣ виклик fetch
// 2️⃣ кнопку Delete
// 3️⃣ оновлення списку після видалення
// Логічно ми ж в бекенді маєм видалить і оновить