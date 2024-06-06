const nav = document.getElementsByTagName("nav")[0];

function openMenu(){
    nav.className = "open";
}

function closeMenu(event){
    if(event.target.id !== "menuOpen"){
        nav.className = "closed";
    }
}

document.getElementById("menuOpen").onclick = openMenu;

document.body.onclick = closeMenu;

