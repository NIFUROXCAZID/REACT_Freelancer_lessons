import { useState } from 'react'

// Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

export default function Task_5() {
    const initSportList = [
        {
            id: 1,
            name: "Рідкий Річард",
            isChosen: false,
        },
        {
            id: 2,
            name: "Семуель Джордан",
            isChosen: false,
        },
        {
            id: 3,
            name: "Про Сіндікат",
            isChosen: false,
        },
        {
            id: 4,
            name: "Бугі2988",
            isChosen: false,
        },
        {
            id: 5,
            name: "ДСП_ГЕЙмінг",
            isChosen: false,
        },
        {
            id: 6,
            name: "Асмангольд",
            isChosen: false,
        }
    ];

    // Як робить юз-стейт коли треба працбувать зі списком
    const [sportList, setSportList] = useState(() =>
        JSON.parse(JSON.stringify(initSportList))
    )

    function moveSportsman(sportsmanId) {
        setSportList((prevSportList) => prevSportList.map((sportsman) => {
            if (sportsman.id === sportsmanId) {
                if (sportsman.isChosen === false) {
                    // Запамьятай як перезаписувать обєкт у списку і всьо
                    return { ...sportsman, isChosen: true }
                } else {
                    return  { ...sportsman, isChosen: false }
                }
            } else {
                return sportsman;
            }
        }))
    }

    return (
        <div className='task-5'>
            <div className='task-5__column'>
                <h2>Загальний список</h2>
                <ul className='task-5__list'>
                    {sportList.map(sportsman => {
                        if (sportsman.isChosen == false) {
                            return <li key={sportsman.id} className='task-5__element'><p>{sportsman.name}</p><button onClick={() => moveSportsman(sportsman.id)} className='task-5__btn'><img src="/img/task-5/arrow-right.svg" alt="Image" /></button></li>
                        }
                    })}
                </ul>
            </div>
            <div className='task-5__column'>
                <h2>Обрані для змагання</h2>
                <ul className='task-5__list'>
                    {sportList.map(sportsman => {
                        if (sportsman.isChosen == true) {
                            return <li key={sportsman.id} className='task-5__element'><p>{sportsman.name}</p><button onClick={() => moveSportsman(sportsman.id)} className='task-5__btn'><img src="/img/task-5/arrow-left.svg" alt="Image" /></button></li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}