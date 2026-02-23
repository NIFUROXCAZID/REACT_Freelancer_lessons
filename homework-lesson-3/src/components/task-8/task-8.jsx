import { useState } from 'react'

// Задача 8. Дано список автомобілів (марка, рік випуску, ціна).
//  Сформувати елементи для фільтрування з використанням випадаючого списку
//  (контент цих випадаючих списків сформувати у залежності від переданого списку).

export default function Task_8() {

    const carList = [
        {
            id: 1,
            mark: "Mersedes",
            year: "2018",
            price: "25000",
        },
        {
            id: 2,
            mark: "Mersedes",
            year: "2015",
            price: "22000",
        },
        {
            id: 3,
            mark: "Opel",
            year: "2018",
            price: "35000",
        },
        {
            id: 4,
            mark: "Opel",
            year: "2018",
            price: "40000",
        },
        {
            id: 5,
            mark: "Audi",
            year: "2010",
            price: "20000",
        },
    ]
    const uniqueMarks = [...new Set(carList.map(car => car.mark))]
    const uniqueYars = [...new Set(carList.map(car => car.year))]

    const [searchedMark, setSearchedMark] = useState("")
    const [searchedYear, setSearchedYear] = useState("")

    function handleSelectMark(e) {
        setSearchedMark(e.target.value)
    }
    function handleSelectYear(e) {
        setSearchedYear(e.target.value)
    }

    // Проще можно
    const filteredCars = carList.filter(car => {
        if (searchedMark == "" && searchedYear == "") {
            return car
        } else if (searchedMark == "") {
            return car.year == searchedYear
        } else if (searchedYear == "") {
            return car.mark == searchedMark
        } else {
            return car.mark == searchedMark && car.year == searchedYear
        }
    })
    
    // console.log(filteredCars);
    return (
        <div className='task-8'>
            <div className='task-8__column'>
                <h2>Марка</h2>
                <select value={searchedMark} onChange={handleSelectMark}>
                    <option value="">Всі марки</option>
                    {uniqueMarks.map(mark => (
                        <option key={mark} value={mark}>{mark}</option>
                    ))}
                </select>
            </div>
            <div className='task-8__column'>
                <h2>Рік випуску</h2>
                <select value={searchedYear} onChange={handleSelectYear}>
                    <option value="">Всі роки</option>
                    {uniqueYars.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className='task-8__column'>
                <h2>Результат</h2>
                <ul>
                    {filteredCars.map(car => (
                        <li key={car.id}>{car.mark} - {car.year} - {car.price}$</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}