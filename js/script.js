setInterval(() => {
    const clock = new Date()
    const horas = clock.getHours()
    const minutos = clock.getMinutes()
    const segundos = clock.getSeconds()
    const elementHoras = document.querySelector('.horas')
    const elementMinutos = document.querySelector('.minutos')
    const elementSegundos = document.querySelector('.segundos')

    if (horas < 10) {
        elementHoras.textContent = `0 ${horas}`
    } else {
        elementHoras.textContent = `${horas}`
    }
    if (minutos < 10) {
        elementMinutos.textContent = `0 ${minutos}`
    } else {
        elementMinutos.textContent = `${minutos}`
    }
    if (segundos < 10) {
        elementSegundos.textContent = `0 ${segundos}`
    } else {
        elementSegundos.textContent = `${segundos}`
    }
}, 1000)