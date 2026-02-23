import { useState } from 'react'

// Задача 1. З клавіатури вводиться довжина у сантиметрах.Виводити скільки це метрів, кілометрів.

export default function Task_1() {

    const [sm, setSm] = useState(null);
    const santimetrHandler = e => {
        setSm(e.target.value);
    }
    const meters = Number(sm) / 100;
    const kilometers = meters / 1000;

    return (
        <div >
            <input type="number" value={sm} onChange={santimetrHandler} placeholder='Введіть сантиметри' />
            <p>Довжина у метрах: {meters}</p>
            <p>Довжина у кілометрах: {kilometers}</p>
        </div>
    )
}