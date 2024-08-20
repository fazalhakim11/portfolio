// document.getElementById("menu").addEventListener("click", toggle())

function toggle() {
    const toggleMenu = document.getElementById("toggleMenu")
    if (toggleMenu.style.display === "flex") {
        toggleMenu.style.display = "none"   
    } else {
        toggleMenu.style.display = "flex" 
    }
}

function tes(){
    console.log("tes")
}