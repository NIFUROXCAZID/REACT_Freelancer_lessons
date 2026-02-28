import { useState, useEffect } from 'react'
import AssignmentForm from './AssignmentForm/AssignmentForm'
import AssignmentSection from './AssignmentsSection/AssignmentSection'

// Задача 1. Доробити проєкт з призначеняням задач. 
// 1) коли додаємо задачу іншому працівнику, то у попереднього працівника треба забрати
// 2) коли видаляємо задачу, то у формі треба скидувати значення селекта


function Task_1({ usersList, tasksList }) {

    const [assignments, setAssignments] = useState(() => ({}))
    
    useEffect(() => {
        console.log("ASSIGNMENTS:", assignments)
    }, [assignments])
    
    // Ініціалізуєм обєкт типу оцього
    // const assignments = {
    //   4:[2,7],
    //   5:[1,4],
    // }
    // Ця функція перетворює обєкт з id у обєкт типу того що в workersList використовується
    function getAssignmentsObject(userId, usersTasksIds) {
        const user = usersList.find((item) => item.id == userId)
        const userTasksList = usersTasksIds.map((taskId) =>
            tasksList.find((item) => item.id === taskId)
        )
        return {
            userId: user.id,
            userName: user.name,
            tasksList: userTasksList,
        }
    }
    // Перетворюэ обэкт з задачами у масив задач типу
    // [
    //     { userId: 4, userName: "Іван", tasksList: [...] },
    //     { userId: 5, userName: "Оля", tasksList: [...] }
    // ]
    function getAssignmentsList() {
        return Object.keys(assignments).map((userId) =>
            getAssignmentsObject(userId, assignments[userId])
        )
    }

    const assignmentsList = getAssignmentsList()

    //  Додає задачу в 4:[2,7], отут в масив задач
    function onTaskAssigned(taskId, userId) {
        setAssignments((prev) => {
            const updated = {};
            // 1️⃣ Видаляємо задачу у всіх користувачів
            for (const key in prev) {
                updated[key] = prev[key].filter((id) => id !== taskId);
            }
            // 2️⃣ Додаємо задачу новому користувачу
            updated[userId] = [...(updated[userId] || []), taskId];

            return updated;
        });
    }
    // Видаляє задачу елемент масиву з 5:[1,4],
    function onUserTaskDelete(userId, taskId) {
        setAssignments((prevAssignments) => ({
            ...prevAssignments,
            [userId]: prevAssignments[userId].filter((id) => id !== taskId),
        }))
    }

    return (
        <div>
            <h1>Менеджер задач</h1>
            <hr />
            <AssignmentForm
                tasksList={tasksList}
                usersList={usersList}
                onTaskAssigned={onTaskAssigned}
                assignments={assignments}
            />
            <hr />
            <AssignmentSection
                assignmentsList={assignmentsList}
                onUserTaskDelete={onUserTaskDelete}
            />
        </div>
    )
}

export default Task_1

