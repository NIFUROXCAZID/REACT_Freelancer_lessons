import AssignmentCard from './AssignmentCard'
import styles from './AssignmentItem.module.css'

function AssignmentSection({ assignmentsList, onUserTaskDelete }) {
    return (
        <div>
            <h1>Список призначень</h1>
            <div className={styles.listAss}>
                {assignmentsList?.length > 0 ? (
                    assignmentsList.map((userAssignments, index) => (
                        <AssignmentCard
                            key={index}
                            {...userAssignments}
                            onUserTaskDelete={onUserTaskDelete}
                        />
                    ))
                ) : (
                    <div>Список призначень порожній</div>
                )}
            </div>
        </div>
    )
}

export default AssignmentSection