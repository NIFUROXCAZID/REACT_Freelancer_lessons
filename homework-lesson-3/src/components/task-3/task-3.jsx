import {useState} from 'react'

// Задача 3. Вводиться дозволена швидкість і поточна швидкість авто.Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.
// Якщо швидкість менше 50 % дозволеної, то колір input – оранжевий,
//  якщо від 50 % до 100 % - зелений, вище 100 % - червоний.
// Якщо значення вище 90 % починає блимати повідомлення «Увага!»

export default function Task_3() {
    const [allSpeed, setAllSpeed] = useState(null);
    const [currSpeed, setCurrSpeed] = useState(null);

    const allSpeedHandler = e => {
        setAllSpeed(e.target.value);
    }
    const currSpeedHandler = e => {
        setCurrSpeed(e.target.value);
    }
    
    // не забувать приводить до number
    const current = Number(currSpeed);
    const allowed = Number(allSpeed);

    function currentBg() {
        if (!currSpeed || !allSpeed) return "task-3__current--default";

        if (current < allowed / 2) return "task-3__current--orange";
        if (current < allowed) return "task-3__current--green";
        return "task-3__current--red";
    }

    function blinkAttention() {
        if (current > 0.9 * allowed) {
            return "task-3__attention";
        }
    }

    return (
        <div className='task-3'>
            <input className='task-3__allowed' type="number" value={allSpeed} onChange={allSpeedHandler} placeholder='Дозволена'/>
            <input className={`task-3__current ${currentBg()}`} disabled={!allSpeed} type="number" value={currSpeed} onChange={currSpeedHandler} placeholder='Поточна' />
            <p className={blinkAttention()}>УВАГА</p>
        </div>
    )
}