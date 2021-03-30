const clockDiv = document.querySelector('#clock');

const startClock = () => {
    let date = new Date();
    let tick = date.toLocaleTimeString()

    clockDiv.textContent = tick;
}

setInterval(startClock, 1000);