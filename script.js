const titulo = document.getElementById("tituloprincipal");
let estadoOriginal = true;

titulo.innerText= "Julieta Gv"

titulo.addEventListener("click", () => {
    if(estadoOriginal === true) {
titulo.innerText= "tu nueva casa";
titulo.style.color="white";

}
else {
    titulo.innerText = "Julieta Gv";
    titulo.style.color = "black"
}

estadoOriginal = !estadoOriginal;
});
