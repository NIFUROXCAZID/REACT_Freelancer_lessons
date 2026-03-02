import { useState, useEffect } from "react"

function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // Запомні всякіе сторонні штуки типу listener і т д в useEffect а то при перерендері воно знов і знов витік памьяті зробить
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        // от ми вішаем зміни стейтів на ресайз зміну розміру вікна
        window.addEventListener("resize", handleResize)

        // cleanup — прибираємо слухача бо він лишиться а рендери підуть далі
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    let src = ""
    if (width > 1280) {
        src = "/img/pc.png"
    } else if (width > 968) {
        src = "/img/tablet.png"
    } else {
        src = "/img/phone.png"
    }

    return { width, height, src }
}


export default useWindowSize
