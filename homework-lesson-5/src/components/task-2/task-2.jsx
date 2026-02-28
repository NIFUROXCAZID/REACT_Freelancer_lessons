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

    return (
        <div>
            {data.map((object, index) => (
                <div key={index}>
                    <p>За 1 {object.CurrencyCodeL} треба {object.Amount.toFixed(2)} грн</p>
                </div>
            ))}
        </div>
    );
}



