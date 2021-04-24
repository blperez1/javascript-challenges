const cells = document.querySelectorAll("td")

function isNotSameColor(arr) {
    let html = "";

    arr.forEach((cell) => {
        if(cell.style.color !== cell.style.backgroundColor) html += cell.innerText
    })

    return html;
}

console.log(isNotSameColor(cells))