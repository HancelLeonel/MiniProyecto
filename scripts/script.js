let productos = [];

function validarDatos(codigo, nombre, precio) {

    if (codigo == '') {
        alert('El codigo no puede estar vacio');
        return false;
    }

    if (nombre == '') {
        alert('El Nombre no puede estar vacio')
        return false;
    }

    if (precio == '') {
        alert('El precio no puede estar vacio')
        return false;
    }

    return true;

}

function guardarDatos(codigo, nombre, precio) {

    productos.push(
        {
            codigo: codigo,
            nombre: nombre,
            precio: precio
        }
    );

}

function mostrarDatos() {
    let registros = '';

    for (let i = 0; i < productos.length; i++) {

        registros +=

            `
        <tr>
        <td>${productos[i].codigo}</td>
        <td>${productos[i].nombre}</td>
        <td>${productos[i].precio}</td>
        </tr>
        
        `
    }

    let detalle = document.getElementById('detalle');
    detalle.innerHTML = registros;
}

function limpiar(){
    document.getElementById('codigo').value='';
    document.getElementById('nombre').value='';
    document.getElementById('precio').value='';

}




function agregarProducto() {

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;

    validarDatos(codigo, nombre, precio);

    guardarDatos(codigo, nombre, precio);

    mostrarDatos();
    limpiar();
}