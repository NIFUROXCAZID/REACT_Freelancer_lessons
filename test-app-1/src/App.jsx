import { useState } from 'react'


import JustLorem1_bruh from './components/task-1/';
import { JustLorem2, JustLorem3 } from './components/task-1/';
import Task2 from './components/task-2/';
import ChargeIndicator from './components/task-3/';

// import { JustLorem2 }from './components/task-1/';
// import {JustLorem3} from './components/task-1/';

function App() {

    const [taskValue, setTaskValue] = useState(0)
    function changeHandler(value) {
        setTaskValue(value);
    }

    return (
        <>
            <h1>Vite + React Clean Template</h1>
            <div>
                <h2>Приклад текстів</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa numquam rerum amet sapiente, optio maiores eveniet maxime placeat fugit voluptatem? Delectus animi quam nostrum, suscipit alias voluptatum non reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <button onClick={() => changeHandler(1)}>TASK 1</button>
                <button onClick={() => changeHandler(2)}>TASK 2</button>
                <button onClick={() => changeHandler(3)}>TASK 3</button>
            </div>
            <div>
                <ul>
                    <li>Amogus</li>
                    <li>Suibaka</li>
                    <li>Amongla 10</li>
                </ul>
            </div>
           
            {taskValue === 1 && (
                <>
                    <JustLorem1_bruh />
                    <JustLorem2 />
                    <JustLorem3 />
                </>
            )}

            {taskValue === 2 && <Task2 />}

            {taskValue === 3 && <ChargeIndicator />}

            {/* <JustLorem1_bruh /><JustLorem2 /><JustLorem3 />
            <Task2/>
            <ChargeIndicator /> */}
        </>
    )
}

export default App
