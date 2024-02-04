function randomNumber () {
    let random = Math.floor(Math.random()*100);
    for (let cocount = 10; cocount > 0; cocount--) {
        let summa = +prompt(`Создатель данной игры: Абдурахман. Введите число (Попыток ${cocount})`)
        if(summa == random) {
            alert(`Вы угадали число, за ${cocount} попыток!`)
            break
        }else if(summa > random) {
            alert(`Ваше число больше чем рандомное, число попыток${cocount}`)
        }else if(summa < random) {
            alert(`Ваше число меньше чем рандомное, число попыток${cocount}`)
        }else {
            alert(`Вы не угадали, и проиграли:(`)
        }
    }
}

randomNumber();