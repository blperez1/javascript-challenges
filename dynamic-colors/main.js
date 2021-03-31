const changeColor = (color) => {
    document.body.style.background = color;
}

document.querySelector('#blue').addEventListener('click', () => changeColor('#13BDF3'))
document.querySelector('#pink').addEventListener('click', () => changeColor('#F313DE'))
document.querySelector('#green').addEventListener('click', () => changeColor('#2CD42E'))
