import { useParams } from "react-router"
import { useLocation } from "react-router"
import { useNavigate } from "react-router"

function TeachersDetail() {
    // Через useParams отримаємо id який в url тобто id вчителя
    const { id } = useParams()
    // Через переданий стейт отримаєм вчителя якраз вчера повторяв
    const { state } = useLocation()
    const teacher = state?.teacher
    const navigate = useNavigate()
    return (
        <div className="teacher-details">
            <p>Деталі про вчителя {teacher?.name}</p>
            <p>id Вчителя: (отримано через useParams() як шматок url) {id}</p>
            <hr />
            <p>Отримано через state = useLocation()</p>
            <p>Предмет який він викладає: {teacher?.subject}</p>
            <img style={{ width: "100px", height: "auto" }} src={teacher?.photo} alt="Image" />
            <button className="go-home" onClick={() => navigate(-1)}>Назад до списку</button>
        </div>
    )
}

export default TeachersDetail
