import { useState } from 'react'

// Задача 2. З клавіатури вводиться температура.Змінювати колір фону у залежності від значення:
// ●	менше нуля – білий
// ●	від 0 до 10 – синій,
// ●	від 11 до 22 – зелений
// ●	вище 22 – червоний
// Реалізувати з класами і стилями.

export default function Task_1() {
    const [temp, setTemp] = useState(null);
    const tempHandler = e => {
        setTemp(e.target.value);
    }

    let background = "task-1--default";

    if (temp !== "") {
        const t = Number(temp);

        if (t < 0) background = "task-1--white";
        else if (t <= 10) background = "task-1--blue";
        else if (t <= 22) background = "task-1--green";
        else background = "task-1--red";
    }

    return (
        <div className={`task-1 ${background}`}>
            <input className='task-1__input' type="number" value={temp} onChange={tempHandler} placeholder='значення температури' />
        </div>
    )
}