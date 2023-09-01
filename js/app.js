let rnavMenu = document.querySelector (`.rnav-menu`)
let humbargerMenu = document.querySelector (`#humbarger-menu`)

humbargerMenu.onclick = () =>{
    humbargerMenu.classList.toggle (`bx-x`);
    rnavMenu.classList.toggle (`show`);
}