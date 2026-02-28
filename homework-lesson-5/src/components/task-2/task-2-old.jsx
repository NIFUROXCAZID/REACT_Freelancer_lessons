import { useEffect, useState } from "react";

// Задача 2. Задача. Конвертер з синхронізацією. При зміні валюти робиться запит для отримання поточного курсу обраної валюти
// Приклад запиту: https://bank.gov.ua/NBU_Exchange/exchange?json

// [
//     {
//         "StartDate": "02.03.2026",
//         "TimeSign": "0000",
//         "CurrencyCode": "036",
//         "CurrencyCodeL": "AUD",
//         "Units": 1,
//         "Amount": 30.6223,
//         "special": null
//     },
//     {
//         "StartDate": "02.03.2026",
//         "TimeSign": "0000",
//         "CurrencyCode": "944",
//         "CurrencyCodeL": "AZN",
//         "Units": 1,
//         "Amount": 25.3512,
//         "special": null
//     },

export default function Task_2() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectOne, setSelectOne] = useState({});
    const [selectTwo, setSelectTwo] = useState({});
    const [inputed, setInputed] = useState(0);
    const [converted, setConverted] = useState(0);

    const [fromCode, setFromCode] = useState("");
    const [toCode, setToCode] = useState("");

    useEffect(() => {
        if (data.length > 0) {
            setFromCode(data[8].CurrencyCodeL);
            setToCode(data[10].CurrencyCodeL);
        }
    }, [data]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                // Для розробки npm run dev
                const response = await fetch("/api/NBU_Exchange/exchange?json");
                // Для деплою на netlify
                // const response = await fetch("/.netlify/functions/currencies");

                if (!response.ok) {
                    throw new Error("Помилка при отриманні даних");
                }

                const result = await response.json(); // ← ось тут парситься JSON
                setData(result); // тепер data — це масив об'єктів
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencies();
    }, []);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;

    
    // ---------------------------------------------------------------------------------------------

    function selectOneHandler(e) {
        const code = e.target.value;

        const selectedCurrency = data.find(
            item => item.CurrencyCodeL === code
        );

        setSelectOne(selectedCurrency);
    }

    function selectTwoHandler(e) {
        const code = e.target.value;

        const selectedCurrency = data.find(
            item => item.CurrencyCodeL === code
        );

        setSelectTwo(selectedCurrency);
    }

    function inputedHandler(e) {
        setInputed(Number(e.target.value));
    }

    
    function convertCurrency() {
        const fromCourse = selectOne.CurrencyCode
        const toCourse = selectTwo.CurrencyCode
        const result = (inputed * Number(fromCourse) / Number(toCourse)).toFixed(2)
        setConverted(result)
    }
    console.log(converted);

    return (
        <div className="task-2">
            {/* {data.map((object, index) => (
                <div key={index}>
                    <p>За 1 {object.CurrencyCodeL} треба {object.Amount.toFixed(2)} грн</p>
                </div>
            ))} */}

            <div className="task-2__selects">
                <div className="task-2__section">
                    <label htmlFor="to-convert">Конверувати оцю валюту</label>
                    <select name="to-convert" value={fromCode} onChange={selectOneHandler}>
                        {data.map(currency => (
                            <option key={currency.CurrencyCodeL} value={currency.CurrencyCodeL}>{currency.CurrencyCodeL}</option>
                        ))}
                    </select>
                </div>
                <div className="task-2__section">
                    <label htmlFor="in-convert">В оцю валюту</label>
                    <select name="in-convert" value={toCode} onChange={selectTwoHandler}>
                        {data.map(currency => (
                            <option key={currency.CurrencyCodeL} value={currency.CurrencyCodeL}>{currency.CurrencyCodeL}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="task-2__results">
                <input type="number" value={inputed} onChange={inputedHandler} placeholder="Введіть кількість валюти" />
                <button className="task-2__btn" onClick={convertCurrency}>Конвертувати</button>
                <p className="task-2__calculated">Ви отримаєте: {converted}</p>


                <div className="task-2__test">
                    <p>Значення з 1 селекта --- {selectOne.Amount}</p>
                    <p>Значення з 2 селекта --- {selectTwo.Amount}</p>
                </div>
            </div>
        </div>
    );
}



