

// menue bar

const menuebar = document.getElementById("menuebar");
menuebar.addEventListener("click" , ()=>{

})



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