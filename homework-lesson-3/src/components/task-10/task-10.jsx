import { useState } from 'react'

// Задача 10. Хрестики-нулики. З історією (можна повернутись назад)

export default function Task_10() {

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]
    const winner = calculateWinner(currentSquares)

    function handleClick(i) {
        if (currentSquares[i] || winner) return

        const nextSquares = currentSquares.slice()
        nextSquares[i] = xIsNext ? "X" : "O"

        const nextHistory = history.slice(0, currentMove + 1)

        setHistory([...nextHistory, nextSquares])
        setCurrentMove(nextHistory.length)
    }

    function jumpTo(move) {
        setCurrentMove(move)
    }

    return (
        <div style={{ display: "flex", gap: "40px" }}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)" }}>
                {currentSquares.map((value, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        style={{
                            width: "80px",
                            height: "80px",
                            fontSize: "24px"
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <div>
                <h3>
                    {winner
                        ? `Переможець: ${winner}`
                        : `Хід: ${xIsNext ? "X" : "O"}`}
                </h3>

                {history.map((_, move) => (
                    <div key={move}>
                        <button onClick={() => jumpTo(move)}>
                            {move === 0
                                ? "На початок"
                                : `Перейти до ходу #${move}`}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}