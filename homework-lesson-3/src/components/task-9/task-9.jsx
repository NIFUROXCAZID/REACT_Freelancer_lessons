import { useState, useEffect } from 'react'

// Задача 9. Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.

export default function Task_9() {

    const words = [
        {
            id: 0,
            en: "table",
            ua: "стіл"
        },
        {
            id: 1,
            en: "car",
            ua: "автомобіль"
        },
        {
            id: 2,
            en: "bus",
            ua: "автобус"
        },
        {
            id: 3,
            en: "man",
            ua: "людина"
        },
        {
            id: 4,
            en: "boy",
            ua: "хлопець"
        },
    ]

    // Перемішуєм масив функція
    function shuffleArray(array) {
        const newArray = [...array]
        for (let i = newArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
        }
        return newArray
    }

    // Ініціалізуєм перемішування 1 раз при 1 рендері () => shuffleArray(words)
    const [shuffledEn, setShuffledEn] = useState(() => shuffleArray(words))
    const [shuffledUa, setShuffledUa] = useState(() => shuffleArray(words))

    const [clickedEn, setClickedEn] = useState(null)
    const [clickedUa, setClickedUa] = useState(null)
    const [isWrong, setIsWrong] = useState(false)

    useEffect(() => {
        if (clickedEn && clickedUa) {

            if (clickedEn.id === clickedUa.id) {
                console.log("Правильно")

                setShuffledEn(prev =>
                    prev.filter(word => word.id !== clickedEn.id)
                )

                setShuffledUa(prev =>
                    prev.filter(word => word.id !== clickedUa.id)
                )

                setClickedEn(null)
                setClickedUa(null)

            } else {
                console.log("НЕ ВІРНО")

                setIsWrong(true)

                setTimeout(() => {setIsWrong(false); setClickedEn(null); setClickedUa(null);}, 1000)
            }
        }
    }, [clickedEn, clickedUa])

    function getEnClass(word) {
        if (isWrong && clickedEn?.id === word.id) {
            return "task-9__red"
        }
        if (clickedEn?.id === word.id) {
            return "task-9__blue"
        }
        return ""
    }

    function getUaClass(word) {
        if (isWrong && clickedUa?.id === word.id) {
            return "task-9__red"
        }
        if (clickedUa?.id === word.id) {
            return "task-9__blue"
        }
        return ""
    }

    return (
        <div className="task-9">
            <h2>Знайдіть пари слів</h2>
            <div className="task-9__columns">
                <ul>
                    {shuffledEn.map(word => (
                        <li className={getEnClass(word)} key={word.id} onClick={() => setClickedEn(word)}>{word.en}</li>
                    ))}
                </ul>
                <ul>
                    {shuffledUa.map(word => (
                        <li className={getUaClass(word)} key={word.id} onClick={() => setClickedUa(word)}>{word.ua}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}