// document.addEventListener("DOMContentLoaded", function() {
//     const btnVerMas = document.getElementById("btnVerMas");
//     const productosOcultos = document.querySelectorAll(".product_section .hidden");

//     btnVerMas.addEventListener("click", function(e) {
//         e.preventDefault();

//         productosOcultos.forEach(producto =>{
//             producto.classList.remove("hidden");
//         })

//         btnVerMas.style.display = "none";
//     })
// });

document.addEventListener("DOMContentLoaded", function() {
    const btnVerMas = document.getElementById("btnVerMas");
    let productosOcultos = document.querySelectorAll(".product_section .hidden");
    let productosAMostrar = 3; // Cantidad de productos a mostrar en cada clic

    btnVerMas.addEventListener("click", function(e) {
        e.preventDefault();

        let mostrados = 0;
        productosOcultos.forEach((producto, index) => {
            if (mostrados < productosAMostrar && producto.classList.contains("hidden")) {
                producto.classList.remove("hidden");
                mostrados++;
            }
        });

        // Actualizar la lista de productos ocultos después de mostrar algunos
        productosOcultos = document.querySelectorAll(".product_section .hidden");

        // Si ya no hay más productos ocultos, deshabilitar el botón
        if (productosOcultos.length === 0) {
            btnVerMas.style.display = "none";
        }
    });
});
