import AssignmentItem from './AssignmentItem'

function AssignmentCard({ userId, userName, tasksList, onUserTaskDelete }) {
    function onTaskDelete(taskId) {
        onUserTaskDelete(userId, taskId)
    }
    return (
        <div>
            <h2>{userName}</h2>
            {tasksList?.length > 0 ? (
                tasksList.map((task) => (
                    <AssignmentItem key={task.id} {...task} onTaskDelete={onTaskDelete} />
                ))
            ) : (
                <div>Список задач порожній</div>
            )}
        </div>
    )
}

export default AssignmentCard