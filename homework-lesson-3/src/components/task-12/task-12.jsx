import React, { useState } from 'react'

// Здача 12. Мережа магазинів. Дано список відділень та список товарів.
//  Для кожного відділення можна вибирати декілька товарів.
//  Вибирати та відображати перелік вибраних товарів для кожного відділення.

export default function Task_12() {

    // Спіскі
    const magList = [
        {
            id: 1,
            name: "Головне",
        },
        {
            id: 2,
            name: "Оптовий",
        },
        {
            id: 3,
            name: "Магазин 1",
        },
        {
            id: 4,
            name: "Магазин 2",
        },
        {
            id: 5,
            name: "Магазин 3",
        },
    ]

    const goodsList = [
        {
            id: 1,
            name: "Телефони",
        },
        {
            id: 2,
            name: "Телевізори",
        },
        {
            id: 3,
            name: "Мікрохвильові печі",
        },
        {
            id: 4,
            name: "Пральні машини",
        },
        {
            id: 5,
            name: "Фени",
        },
        {
            id: 6,
            name: "Чайники",
        },
    ]

    // const initSp = [
    //     {
    //         id: 0,
    //         name: "Магазин 3",
    //         goods: [{
    //             id: 4,
    //             name: "Пральні машини",
    //         },
    //         {
    //             id: 5,
    //             name: "Фени",
    //         },
    //         {
    //             id: 6,
    //             name: "Чайники",
    //         },]
    //     }
    // ]

    const [spreadList, setSpreadList] = useState([])
    const [isMagSelected, setIsMagSelected] = useState("")
    const [isGoodSelected, setIsGoodSelected] = useState("")

    function setSelectedMagClass(mag) {
        if (isMagSelected.id === mag.id) {
            return "task-12__activeMag"
        } else {
            return ""
        }
    }
    function setSelectedGoodClass(good) {
        if (isGoodSelected.id === good.id) {
            return "task-12__activeGood"
        } else {
            return ""
        }
    }

    function addSpread() {
        if (!isMagSelected || !isGoodSelected) return

        setSpreadList(prev => {
            const existingMag = prev.find(
                mag => mag.id === isMagSelected.id
            )

            // Якщо магазину ще нема — створюємо новий
            if (!existingMag) {
                return [
                    ...prev,
                    {
                        id: isMagSelected.id,
                        name: isMagSelected.name,
                        goods: [isGoodSelected],
                    },
                ]
            }

            // 🔥 Перевірка чи товар вже є
            const isGoodAlreadyAdded = existingMag.goods.some(
                good => good.id === isGoodSelected.id
            )

            if (isGoodAlreadyAdded) {
                return prev // нічого не змінюємо
            }

            // Якщо магазин є і товару нема — додаємо
            return prev.map(mag => {
                if (mag.id === isMagSelected.id) {
                    return {
                        ...mag,
                        goods: [...mag.goods, isGoodSelected],
                    }
                }
                return mag
            })
        })
    }

    function removeSpread() {
        if (!isMagSelected) return

        setSpreadList(prev =>
            prev.filter(mag => mag.id !== isMagSelected.id)
        )

        setIsMagSelected("")
    }

    return (
        <div className='task-12'>
            <div className='task-12__column'>
                <h2>Відділення</h2>
                {magList.map(mag => (
                    <p className={setSelectedMagClass(mag)} key={mag.id} onClick={() => setIsMagSelected(mag)}>{mag.name}</p>
                ))}
            </div>
            <div className='task-12__column'>
                <button className='task-12__add-btn' onClick={addSpread} disabled={!isMagSelected || !isGoodSelected}>Додати</button>
                <button className='task-12__delete-btn' onClick={removeSpread} disabled={!isMagSelected}>Видалити</button>
            </div>
            <div className='task-12__column'>
                <h2>Товари</h2>
                {goodsList.map(good => (
                    <p className={setSelectedGoodClass(good)} key={good.id} onClick={() => setIsGoodSelected(good)}>{good.name}</p>
                ))}
            </div>
            <div className='task-12__column'>
                <h2>Розподіл товарів</h2>
                {/* Рендериться список магазинів з товарами id + назва магазину + колекція (список) товарів як властивість обєкта магазина */}
                {spreadList.map(mag => (
                    <React.Fragment key={mag.id}>
                        <h3
                            className={isMagSelected?.id === mag.id ? "task-12__activeMag" : ""}
                            onClick={() => setIsMagSelected(mag)}
                        >
                            {mag.name}
                        </h3>

                        {mag.goods.map(good => (
                            <p key={good.id}>* {good.name}</p>
                        ))}

                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
