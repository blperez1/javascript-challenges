function masterMenu(menus) {
    let list = menus.flat();
    let combinedMenu = new Set();
    list.forEach((item) => {
        combinedMenu.add(item)
    });

    return combinedMenu
}

function renderMenu(menuSet) {
    const menuList = document.querySelector('#combined-menu');
    
    for(let item of menuSet) {
       let listItem = document.createElement('li')
        let textNode = document.createTextNode(item)
        listItem.appendChild(textNode)

        menuList.appendChild(listItem)
    }
} 

renderMenu(masterMenu([["pizza", "tacos", "pasta"], ["pasta"], ["corn in a cup", "candy apple", "fried picles", "pizza"] ]))