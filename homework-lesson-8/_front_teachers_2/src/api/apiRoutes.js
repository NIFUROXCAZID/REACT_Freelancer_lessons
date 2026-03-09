// routes.js
// const API_BASE_URL = 'http://localhost:5000/api'
// отут помінять для деплою потом
const API_BASE_URL = import.meta.env.VITE_API_URL
export default {
  // GET: Отримати всіх вчителів
    getAllTeachers: `${API_BASE_URL}/api/teachers`,

  // POST: Створити нового вчителя
    addTeacher: `${API_BASE_URL}/api/teachers`,

  // GET: Отримати вчителя за ID
    getTeacherById: (id) => `${API_BASE_URL}/api/teachers/${id}`,

  // PUT: Оновити вчителя за ID
    updateTeacher: (id) => `${API_BASE_URL}/api/teachers/${id}`,

  // DELETE: Видалити вчителя за ID
    deleteTeacher: (id) => `${API_BASE_URL}/api/teachers/${id}`,
}
