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
    const [converted, setConverted] = useState("");
    const [fromCode, setFromCode] = useState("");
    const [toCode, setToCode] = useState("");
    const [amount, setAmount] = useState("");

    // Щоб встановити початкові значення в селект
    // кращі з кодами валют работать а обєкт брати при фінальному обчисленні через find
    useEffect(() => {
        if (data.length > 0) {
            setFromCode("USD");
            setToCode("EUR");
        }
    }, [data]);

    // Краще перерахунок валюти через useEffect щоб залежало від всякого
    // От і відчув на практиці зачем useEffect
    useEffect(() => {
        const fromCurrency = data.find(
            item => item.CurrencyCodeL === fromCode
        );

        const toCurrency = data.find(
            item => item.CurrencyCodeL === toCode
        );

        if (!fromCurrency || !toCurrency || !amount) {
            setConverted("");
            return;
        }

        const result = Number(amount) * Number(fromCurrency.Amount) / Number(toCurrency.Amount);

        setConverted(result.toFixed(2));
    }, [amount, fromCode, toCode, data]);

    // Це щоб отриати колекцію валют. Треба ставить його нижче інших стейтів і ефектів
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                // Для розробки npm run dev
                // const response = await fetch("/api/NBU_Exchange/exchange?json");
                // Для деплою на netlify
                const response = await fetch("/.netlify/functions/currencies");

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
    // console.log(converted);

    return (
        <div className="task-2">
            <div className="task-2__selects">
                <div className="task-2__section">
                    <label htmlFor="to-convert">Конверувати {fromCode}</label>
                    <select name="to-convert" value={fromCode} onChange={(e) => setFromCode(e.target.value)}>
                        {data.map(currency => (
                            <option key={currency.CurrencyCodeL} value={currency.CurrencyCodeL}>{currency.CurrencyCodeL}</option>
                        ))}
                    </select>
                </div>
                <div className="task-2__section">
                    <label htmlFor="in-convert">В {toCode}</label>
                    <select name="in-convert" value={toCode} onChange={(e) => setToCode(e.target.value)}>
                        {data.map(currency => (
                            <option key={currency.CurrencyCodeL} value={currency.CurrencyCodeL}>{currency.CurrencyCodeL}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="task-2__results">
                <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Введіть кількість валюти" />
                <p className="task-2__calculated">З {amount} - {fromCode} ви отримаєте {converted} - {toCode}</p>
            </div>
        </div>
    );
}



// function convertCurrency(e) {
//     const value = e.target.value;
//     setAmount(value);

//     const fromCurrency = data.find(
//         item => item.CurrencyCodeL === fromCode
//     );
//     const toCurrency = data.find(
//         item => item.CurrencyCodeL === toCode
//     );

//     if (!fromCurrency || !toCurrency) return;

//     const result = ( Number(value) * Number(fromCurrency.Amount) / Number(toCurrency.Amount)).toFixed(2);
//     setConverted(result);
// }

// function convertCurrency(e) {
//     setAmount(e.target.value);
//     const fromCurrency = data.find(item => item.CurrencyCodeL === fromCode);
//     const toCurrency = data.find(item => item.CurrencyCodeL === toCode);
//     const result = (amount * Number(fromCurrency.Amount) / Number(toCurrency.Amount)).toFixed(2)
//     setConverted(result)
// }
// console.log(converted);


