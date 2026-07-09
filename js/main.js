//toggle mobile menue visibity
const menuBar = document.getElementById("menuebar");
const nav = document.getElementById("nav");
const closeBar = document.querySelector(".closebar");


menuBar.addEventListener("click", () => {
    nav.classList.add("active");
});

closeBar.addEventListener("click", () => {
    nav.classList.remove("active");
});

const links = document.querySelectorAll("#nav a");
links.forEach(link =>{
    link.addEventListener("click" ,()=>{
        nav.classList.remove("active")
    });
});










// cards for about us section
const boxcard = document.getElementById("boxcard");

function createImages() {
    boxcard.innerHTML = "";

    const count = window.innerWidth <= 768 ? 12 : 9;

    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = "./imgs/about-us-3.png";
        img.alt = "user";
        boxcard.appendChild(img);
    }
}

createImages();
window.addEventListener("resize", createImages);