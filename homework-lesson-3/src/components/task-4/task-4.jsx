import { useState } from 'react'

// Задача 4. Однорядковий сапер.Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни(використати атрибути).Спочатку клітинки сірі.При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

export default function Task_4() {
    const initGameField = [
        {
            id: 1,
            hasMine: 0,
        },
        {
            id: 2,
            hasMine: 0,
        },
        {
            id: 3,
            hasMine: 1,
        },
        {
            id: 4,
            hasMine: 0,
        },
        {
            id: 5,
            hasMine: 1,
        },
        {
            id: 6,
            hasMine: 0,
        },
    ]

    const [gameField, setGameField] = useState(() =>
        JSON.parse(JSON.stringify(initGameField))
    )
    const [history, setHistory] = useState([]);
    const hasHistory = history.length > 0; // якщо history > 0 то true
    
    // Встановлюєм класи на клітинку
    function getCurrentClass(ind) {
        if (gameField[ind].isOpen) {
            if (gameField[ind].hasMine) {
                return 'task-4__has-mine-state';
            } else {
                return 'task-4__no-mine-state';
            } 
        } else {
            return 'task-4__cell';
        } 
    }

    // 1 - додаєм масив обєктів клітинок в історію як елемент масиву
    // 2 - Відкриваем клітинку через проходження по масиву клітинок
    // пошук клітинки з потріним айді і перестворення обєкту клітинки з властивісью isOpen: true
    function onCellClick(cellId) {
        setHistory((prevH) => [...prevH, JSON.parse(JSON.stringify(gameField))])

        setGameField((prevGameField) =>
            prevGameField.map((cell) =>
                cell.id === cellId ? { ...cell, isOpen: true } : cell
            )
        )
    }
    // Беремо останній елемент масиву history тобто масив обєктів клітинок на поперельному ході
    // Рендеримо масив клітинок щоб було як на попередньому ході
    // Видаляем елемент бо повернулися на попередній і він в масиві більше не нада
    function onRevert() {
        const lastGameField = history.at(-1)
        setGameField(lastGameField)
        setHistory((prev) => prev.slice(0, -1))
    }

    return (
        <div >
            <h1>Saper (React-version)</h1>
            <table>
                <tbody>
                    <tr>
                        {gameField.map((cell, ind) => (
                            <td key={cell.id} className={getCurrentClass(ind)} onClick={() => onCellClick(cell.id)}></td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <hr />
            {hasHistory && <button onClick={onRevert}>Revert</button>}
        </div>
    )
}