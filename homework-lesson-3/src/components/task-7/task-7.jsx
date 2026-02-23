import { useState } from 'react'

// Задача 7. Динамічний пошук.Є список працівників і поле пошуку.
// При введенні відображаються усі, які містять вказаний фрагмент

export default function Task_7() {
    
    const initialWorkers = [
        {
            id: 1,
            name: "Іванов І. І.",
        },
        {
            id: 2,
            name: "Петров П. П.",
        },
        {
            id: 3,
            name: "Скрипка С. П.",
        },
        {
            id: 4,
            name: "Гончаренко Г. О.",
        },
        {
            id: 5,
            name: "Івась І. І.",
        }
    ]

    const [searchedPart, setSearchedPart] = useState("")
    // Іноді не треба все заганяти в юз стейт можна просто пофільтрувати і все
    const filteredWorkers = initialWorkers.filter(worker =>
        worker.name.toLowerCase().includes(searchedPart.toLowerCase())
    )

    return (
        <div className='task-7'>
            <div className='task-7__column'>
                <div className='task-7__col-head'>
                    <p>Імь'я</p>
                    <input type="text" value={searchedPart} onChange={(e) => setSearchedPart(e.target.value)} placeholder='Я шукаю...'/>
                </div>
                <div className='task-7__body'>
                    <p><strong>Працівники</strong></p>
                    <ul>
                        {initialWorkers.map(worker => (
                            <li key={worker.id}>{worker.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='task-7__column'>
                <div className='task-7__col-head'>
                    <p>Імь'я</p>
                    <p className='task-7__searched'>{searchedPart}</p>
                </div>
                <div className='task-7__body'>
                    <p><strong>Працівники</strong></p>
                    <ul>
                        {filteredWorkers.map(worker => (
                            <li key={worker.id}>{worker.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}