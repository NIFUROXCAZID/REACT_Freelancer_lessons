import { useState } from 'react'
// import './task-3.module.scss' Якщо просто файл стилів але через модулі краще якщо проект великий для багатьох типу как оті аптеки
// а якщо чисто для себе то можна все в папці styles
import styles1 from './task-3.module.scss'
// Приклад. У залежності від заряду батареї застосовувати відповідний колір фону
// Заряд > 80 – зелений
// 30 <= Заряд <= 80 - жовтий
// Заряд < 30 - червоний

function ChargeIndicator() {
    console.log('1111111')

    const [chargeValue, setChargeValue] = useState(50)
    function changeHandler(e) {
        const val = parseInt(e.target.value)
        if (!isNaN(val)) setChargeValue(val)
    }

    function getColorClass() {
        let colorClass
        if (chargeValue > 80) colorClass = styles1.full
        else if (chargeValue >= 30) colorClass = styles1.medium
        else colorClass = styles1.low
        return colorClass
    }

    return (
        <label>
            Заряд батареї
            <input type="number" onBlur={changeHandler} className={getColorClass()} />
        </label>
    )
}

export default ChargeIndicator