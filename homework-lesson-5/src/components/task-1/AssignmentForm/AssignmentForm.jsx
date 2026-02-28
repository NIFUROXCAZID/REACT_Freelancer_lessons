import TaskSelector from './TaskSelector'
import styles from './TaskSelector.module.css'

function AssignmentForm({ usersList, tasksList, onTaskAssigned, assignments }) {
    return (
        <div>
            <h1>Розподілювач задач</h1>
            <div className={styles.tasList}>
                {tasksList?.length > 0 ? (
                    tasksList.map((task) => (
                        <TaskSelector
                            key={task.id}
                            task={task}
                            usersList={usersList}
                            onTaskAssigned={onTaskAssigned}
                            assignments={assignments}
                        />
                    ))
                ) : (
                    <div>Список задач порожній</div>
                )}
            </div>
        </div>
    )
}

export default AssignmentForm