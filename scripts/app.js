import { menuElements } from "./menu-elements.js";
console.log(menuElements);
const menuTable = document.querySelector('.menu__table');

document.addEventListener('DOMContentLoaded', ()=>{
    generarMenu();
})

function generarMenu(){
    menuElements.forEach((item)=>{
        console.log(obtenerHTMLItem(item));
        menuTable.appendChild(obtenerHTMLItem(item));
    })
}

function obtenerHTMLItem(item){
    const menuItem = document.createElement('DIV');
    menuItem.classList.add('menu__table-item');
    
    menuItem.innerHTML = `
        <div class="menu__table-item__container-img"><img src="${item.imageUrl}" alt="${item.imageTextAlternative}"></div>
        <div class="menu__table-item_info">
            <div>
                <p class="menu__table-item_info_type">${item.name}</p>
                <p class="menu__table-item_info_price">${item.price}</p>
            </div>
            <p>${item.description}</p>
        </div>
    `;
    
    return menuItem;
}