import { useState } from 'react'

// Задача 6. Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари.
// Пару можна видалити.Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.
// Якщо не вистачає хлопців або дівчат вибір також блокується.

export default function Task_6() {
    const initBoyList = [
        {
            id: 1,
            name: "Іван"
        },
        {
            id: 2,
            name: "Степан"
        },
        {
            id: 3,
            name: "Олег"
        },
        {
            id: 4,
            name: "Петро"
        },
        {
            id: 5,
            name: "Ріхтер"
        },
        {
            id: 6,
            name: "Мельник"
        }
    ];
    const initGirlList = [
        {
            id: 1,
            name: "Олена"
        },
        {
            id: 2,
            name: "Оксана"
        },
        {
            id: 3,
            name: "Маруся"
        },
        {
            id: 4,
            name: "Богдана"
        },
        {
            id: 5,
            name: "Вероніка"
        }
    ];
    const initPairList = [];

    const [boyList, setBoyList] = useState(() =>
        JSON.parse(JSON.stringify(initBoyList))
    )
    const [girlList, setGirlList] = useState(() =>
        JSON.parse(JSON.stringify(initGirlList))
    )
    const [pairList, setPairList] = useState(() =>
        JSON.parse(JSON.stringify(initPairList))
    )
    const [selectedBoy, setSelectedBoy] = useState(null)
    const [selectedGirl, setSelectedGirl] = useState(null)

    function createPair() {
        // додаєм хлопчика дівчинку обєкти в список пар
        setPairList(prev => [
            ...prev,
            {
                id: Date.now(), // або інший спосіб
                boy: selectedBoy,
                girl: selectedGirl
            }
        ])
        // прибирораєм обраних хлопчика дівчинку з тих списків
        setBoyList(prev => prev.filter(b => b.id !== selectedBoy.id))
        setGirlList(prev => prev.filter(g => g.id !== selectedGirl.id))
        // прибироаєм хлопчика дівчинку з обраних
        setSelectedBoy(null)
        setSelectedGirl(null)
    }

    function removePair(pairId) {
        // Досить простий алгоритм видалення й повернення пари обратно
        const pairToRemove = pairList.find(p => p.id === pairId)
        setBoyList(prev => [...prev, pairToRemove.boy])
        setGirlList(prev => [...prev, pairToRemove.girl])
        setPairList(prev => prev.filter(p => p.id !== pairId))
    }
    // ПАМЬЯТАЙ
//     Не мутувати масиви
//     Завжди створювати нові масиви через filter, map, spread
//     Зберігати у парі повний об’єкт
//     Скидувати вибір після додавання
    return (
        <div className='task-6'>
            <div className='task-6__head'>
                <div className='task-6__select'>
                    <h2>Хлопці</h2>
                    <ul>
                        {boyList.map(boy => (
                            // Ставим цілий обєкт в use state для обраного хлопця чи дівчини
                            <li className={selectedBoy?.id === boy.id ? "active" : ""} key={boy.id} onClick={() => setSelectedBoy(boy)}>{boy.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='task-6__select'>
                    <h2>Дівчата</h2>
                    <ul>
                        {girlList.map(girl => (
                            <li className={selectedGirl?.id === girl.id ? "active" : ""} key={girl.id} onClick={() => setSelectedGirl(girl)}>{girl.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button disabled={!selectedBoy || !selectedGirl} onClick={createPair}>Додати</button>
            <div className='task-6__body'>
                <h2>Обрані пари</h2>
                <ul>
                    {pairList.map(pair => (
                        <li key={pair.id}><p>{pair.boy.name}</p> - <p>{pair.girl.name}</p><button onClick={() => removePair(pair.id)}><img src="/img/task-6/close.svg" alt="Image" /></button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}