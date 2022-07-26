function cargarModuloAccesorio()
{
    fetch('producto/accesorio/accesorio.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloArmazon()
{
    fetch('producto/armazon/armazon.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloExamenVista()
{
    fetch('examen_vista/examen_vista.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloCliente()
{
    fetch('cliente/cliente.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloEmpleado()
{
    fetch('empleado/empleados.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloVenta()
{
    fetch('venta/venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function mandarConfirmacionCambios()
{
    alert("Los cambios se guardaron correctamente");
}