import { useState } from 'react'

// Задача 11. Морський бій з історією.

export default function Task_11() {

    const boardSize = 5

    // Заздалегідь розставлені кораблі
    const ships = [
        [1, 1],
        [1, 2],
        [3, 3],
        [4, 0],
    ]

    function createEmptyBoard() {
        return Array(boardSize).fill(null).map(() => Array(boardSize).fill(null))
    }

    function isShip(row, col) {
        return ships.some(([r, c]) => r === row && c === col)
    }

    const [history, setHistory] = useState([createEmptyBoard()])
    const [currentMove, setCurrentMove] = useState(0)

    const currentBoard = history[currentMove]

    function handleClick(row, col) {
        if (currentBoard[row][col] !== null) return

        const newBoard = currentBoard.map(r => r.slice())

        newBoard[row][col] = isShip(row, col) ? "hit" : "miss"

        const nextHistory = history.slice(0, currentMove + 1)

        setHistory([...nextHistory, newBoard])
        setCurrentMove(nextHistory.length)
    }

    function jumpTo(move) {
        setCurrentMove(move)
    }


    return (
        <div style={{ display: "flex", gap: "40px" }}>

            <div>
                {currentBoard.map((row, rIndex) => (
                    <div key={rIndex} style={{ display: "flex" }}>
                        {row.map((cell, cIndex) => (
                            <button
                                key={cIndex}
                                onClick={() => handleClick(rIndex, cIndex)}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    background:
                                        cell === "hit"
                                            ? "red"
                                            : cell === "miss"
                                                ? "lightblue"
                                                : "grey",
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <h3>Історія</h3>
                {history.map((_, move) => (
                    <div key={move}>
                        <button onClick={() => jumpTo(move)}>
                            {move === 0
                                ? "Початок"
                                : `Хід #${move}`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}