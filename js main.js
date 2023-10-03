const salirads = document.querySelector("cerrar-ads");
const ads2 = document.querySelector(".ads2");
const salirads3 = document.querySelector("cerrar-ads");
const ads3 = document.querySelector(".ads3");


salirads.addEventListener("click", () => {
    ads2.classList.add("hiden");
})

salirads.addEventListener("click", () => {
    ads3.classList.add("hiden");
})