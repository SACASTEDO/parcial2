let carrito = [];
let total = 0;
 
function agregarAlCarrito(id, nombre, precio) {
    const producto = { id, nombre, precio };
    carrito.push(producto);
    total += precio;
 
    mostrarCarrito();
}
 
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
 
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(listItem);
    });
 
    totalElement.textContent = total.toFixed(2);
}