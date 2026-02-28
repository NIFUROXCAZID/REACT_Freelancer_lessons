import { useState } from 'react'

import Task_1 from './components/task-1/';
import TaskManager from './components/task-1/TaskManager'
import { tasksList, workersList } from './data/6_tasks_devider'
import Task_2 from './components/task-2/';
// import Task_3 from './components/task-3/';
// import Task_4 from './components/task-4/';
// import Task_5 from './components/task-5/';
// import Task_6 from './components/task-6/';
// import Task_7 from './components/task-7/';
// import Task_8 from './components/task-8/';
// import Task_9 from './components/task-9/';
// import Task_10 from './components/task-10/';
// import Task_11 from './components/task-11/';
// import Task_12 from './components/task-12/';
// import Task_13 from './components/task-13/';
// import Task_14 from './components/task-14/';


function App() {

    const [taskValue, setTaskValue] = useState(0)
    function changeHandler(value) {
        setTaskValue(value);
    }

    return (
        <>
            <h1>Урок 5 Домашнє завдання</h1>
            <div>
                <button onClick={() => changeHandler(1)}>TASK 1 (TasksManager доробити)</button>
                <button onClick={() => changeHandler(2)}>TASK 2 (Конвертер з синхронізацією)</button>
                {/* <button onClick={() => changeHandler(3)}>TASK 3</button>
                <button onClick={() => changeHandler(4)}>TASK 4</button>
                <button onClick={() => changeHandler(5)}>TASK 5</button>
                <button onClick={() => changeHandler(6)}>TASK 6</button>
                <button onClick={() => changeHandler(7)}>TASK 7</button> */}
            </div>
            {/* <div>
                <button onClick={() => changeHandler(8)}>TASK 8</button>
                <button onClick={() => changeHandler(9)}>TASK 9</button>
                <button onClick={() => changeHandler(10)}>TASK 10</button>
                <button onClick={() => changeHandler(11)}>TASK 11</button>
                <button onClick={() => changeHandler(12)}>TASK 12</button>
                <button onClick={() => changeHandler(13)}>TASK 13</button>
                <button onClick={() => changeHandler(14)}>TASK 14</button>
            </div> */}

            {taskValue === 1 && <TaskManager tasksList={tasksList} usersList={workersList} />}
            {taskValue === 2 && <Task_2 />}
            {/* {taskValue === 3 && <Task_3 />}
            {taskValue === 4 && <Task_4 />}
            {taskValue === 5 && <Task_5 />}
            {taskValue === 6 && <Task_6 />}
            {taskValue === 7 && <Task_7 />}
            {taskValue === 8 && <Task_8 />}
            {taskValue === 9 && <Task_9 />}
            {taskValue === 10 && <Task_10 />}
            {taskValue === 11 && <Task_11 />}
            {taskValue === 12 && <Task_12 />}
            {taskValue === 13 && <Task_13 />}
            {taskValue === 14 && <Task_14 />} */}
        </>
    )
}

export default App
