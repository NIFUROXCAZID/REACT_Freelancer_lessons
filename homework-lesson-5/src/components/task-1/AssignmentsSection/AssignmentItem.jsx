import styles from './AssignmentItem.module.css'
function AssignmentItem({ id, title, onTaskDelete }) {
    return (
        <div className={styles.item}>
            <div>{title}</div>
            <button onClick={() => onTaskDelete(id)}>X</button>
        </div>
    )
}

export default AssignmentItem