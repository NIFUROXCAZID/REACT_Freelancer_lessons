import { useState, useEffect } from 'react'

// Задача 14. Розробити форму для бронювання номера у готелі (придумайте самі які мають бути поля)
// Уяви що це щось тип контрольной роботи
// От ще вправа - ПОСТАВЬ REACT DEV TOOLS собі

export default function Task_14() {

    const [reservedList, setReservedList] = useState([]);
    const [form, setForm] = useState({
        name: "",
        surname: "",
        phone: "",
        roomType: "",
        eating: false,
        payment: ""
    });

    const formChange = (e) => {
        const { name, type, value, checked } = e.target;
        let newValue = type === "checkbox" ? checked : value;
        if (name === "phone") {
            newValue = value.replace(/\D/g, "");
        }
        setForm(prev => ({
            ...prev,
            [name]: newValue
        }));
    };

    const roomPrices = {
        standart: 1200,
        superior: 1800,
        luks: 3000
    };
    const foodPrice = 400;
    const totalPrice = (roomPrices[form.roomType] || 0) + (form.eating ? foodPrice : 0);

    const handleReserve = () => {
        if (!isFormValid) return;

        const newReservation = {
            ...form,
            total: totalPrice,
            id: Date.now()
        };

        setReservedList(prev => [...prev, newReservation]);

        setForm({
            name: "",
            surname: "",
            phone: "",
            roomType: "",
            eating: false,
            payment: ""
        });
    };

    
    const isFormValid = form.name.trim() && form.surname.trim() && form.phone.trim() && form.roomType && form.payment;

    useEffect(() => {
        console.log("FORM UPDATED:", form);
    }, [form]);
    console.log("VALID:", isFormValid);
    console.log(reservedList);

    return (
        <div className='task-14'>
            <div className='task-14__form'>
                <div className='task-14__form-element'>
                    <label htmlFor="name">Імʼя *</label>
                    <input id='name' type="text" name="name" value={form.name} onChange={formChange} placeholder="Імь'я" />
                </div>
                <div className='task-14__form-element'>
                    <label htmlFor="surname">Прізвище *</label>
                    <input id='surname' type="text" name="surname" value={form.surname} onChange={formChange} placeholder="Прізвище" />
                </div>
                <div className='task-14__form-element'>
                    <label htmlFor="phone">Номер телефону *</label>
                    <input id='phone' name="phone" type="tel" value={form.phone} onChange={formChange} placeholder="+380..."/>
                </div>
                <div className='task-14__form-element'>
                    <label htmlFor="roomType">Тип Номеру *</label>
                    <select name="roomType" value={form.roomType} onChange={formChange}>
                        <option value="">Оберіть опцію</option>
                        <option value="standart">Стандарт</option>
                        <option value="superior">Покращений</option>
                        <option value="luks">Люкс</option>
                    </select>
                </div>
                <div className='task-14__form-element'>
                    <label className='task-14__eat-lablel' htmlFor="eating" >Включити харчування
                        <input id="eating" type="checkbox" name="eating" checked={form.eating} onChange={formChange} />
                    </label>
                </div>
                <div className='task-14__form-element'>
                    <label htmlFor="pay">Спосіб Оплати *</label>
                    <select id="pay" name="payment" value={form.payment} onChange={formChange}>
                        <option value="">Оберіть опцію</option>
                        <option value="visa">VISA</option>
                        <option value="masercard">Mastercard</option>
                        <option value="cash">Налічними</option>
                    </select>
                </div>
                <div className='task-14__form-element'>
                    <h3>До сплати буде: <span>{totalPrice}</span> UAH</h3>
                    <button type="button" className="task-14__btn" onClick={handleReserve} disabled={!isFormValid}>Перейти до сплати</button>
                </div>
            </div>
            <hr />
            <div className='task-14__list'>
                <h2>Створені заявки</h2>
                <div className='task-14__order-list'>
                    <div className='task-14__order'>
                        {reservedList.length === 0 ? (
                            <p>Поки що немає заявок</p>
                        ) : (
                            reservedList.map((item) => (
                                <div key={item.id} className="task-14__order-item">
                                    <p><b>Імʼя:</b> {item.name}</p>
                                    <p><b>Прізвище:</b> {item.surname}</p>
                                    <p><b>Телефон:</b> {item.phone}</p>
                                    <p><b>Тип номера:</b> {item.roomType}</p>
                                    <p><b>Харчування:</b> {item.eating ? "Так" : "Ні"}</p>
                                    <p><b>Оплата:</b> {item.payment}</p>
                                    <p><b>Сума:</b> {item.total} UAH</p>
                                    <hr />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}