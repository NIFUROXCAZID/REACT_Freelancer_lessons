import styles from './TaskSelector.module.css'
function TaskSelector({ task, usersList, onTaskAssigned, assignments }) {
    function selectUser(e) {
        onTaskAssigned(task.id, Number(e.target.value))
    }

    // 🔥 шукаємо кому призначена ця задача
    const assignedUserId = Object.keys(assignments).find(userId => assignments[userId].includes(task.id)) || 0

    const agUsersList = [{ id: 0, name: 'Виберіть користувача' }, ...usersList]
    return (
        <div className={styles.taskItem}>
            <div>{task.title}</div>
            <select onChange={selectUser} value={Number(assignedUserId)}>
                {agUsersList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default TaskSelector