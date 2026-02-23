import { useState } from 'react'

// Задача 13. Тренажер додавання. Вводимо загальну кількість прикладів і натискаємо на кнопку «Старт».
//  Після запуску (натисканні на кнопку «Старт») кожні 10 секунд (10 секунд між завданнями) користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
//  Формується список тих, які він відповів правильно, і які він відповів неправильно. Загальна кількість прикладів вводиться.

export default function Task_13() {
   
    const [totalCount, setTotalCount] = useState(0);
    const [currentTask, setCurrentTask] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [correctList, setCorrectList] = useState([]);
    const [wrongList, setWrongList] = useState([]);
    const [isStarted, setIsStarted] = useState(false);

    const generateTask = () => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCurrentTask({a, b, result: a + b});
        setUserAnswer("");
    };

    const handleStart = () => {
        if (!totalCount) return;

        setIsStarted(true);
        setCorrectList([]);
        setWrongList([]);

        let counter = 0;

        generateTask();

        const interval = setInterval(() => {
            counter++;

            if (counter >= totalCount) {
                clearInterval(interval);
                setIsStarted(false);
                return;
            }

            generateTask();
        }, 10000);
    };

    const handleCheck = () => {
        if (!currentTask) return;

        if (Number(userAnswer) === currentTask.result) {
            setCorrectList(prev => [...prev, currentTask]);
        } else {
            setWrongList(prev => [...prev, currentTask]);
        }
    };

    return (
        <div>
            <h2>Введіть загальну кількість прикладів</h2>

            <input
                type="number"
                value={totalCount}
                onChange={(e) => setTotalCount(Number(e.target.value))}
                disabled={isStarted}
            />

            <button onClick={handleStart} disabled={isStarted}>
                Старт
            </button>

            {currentTask && (
                <div>
                    <h3>
                        {currentTask.a} + {currentTask.b} = ?
                    </h3>

                    <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />

                    <button onClick={handleCheck}>
                        Відповісти
                    </button>
                </div>
            )}

            <h3>Правильні:</h3>
            {correctList.map((item, index) => (
                <div key={index}>
                    {item.a} + {item.b}
                </div>
            ))}

            <h3>Неправильні:</h3>
            {wrongList.map((item, index) => (
                <div key={index}>
                    {item.a} + {item.b}
                </div>
            ))}
        </div>
    )
}