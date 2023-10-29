const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circleSize = 925; // Tamaño del círculo

    circle.style.left = `${x - circleSize / 2}px`;
    circle.style.top = `${y - circleSize / 2}px`;
});



const BotonIdioma = document.getElementById("button-changue");


const cambiarTexto = document.querySelectorAll("[data-section");

const Cambiarlenguaje = async lenguaje=>{
    const requestJson = await fetch(`/html/lenguajes/${lenguaje}.json`);
    const text = await requestJson.json ();

    for (const cambiarTextos of cambiarTexto){
        const  section = cambiarTextos.dataset.section;
        const value = cambiarTextos.dataset.value;

        cambiarTextos.innerHTML = text [section][value];
    }
};

BotonIdioma.addEventListener('click', (e) => {
    Cambiarlenguaje(e.target.parentElement.dataset.language);
});