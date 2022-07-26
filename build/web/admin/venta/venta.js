function cargarAgregarVenta()
{
    fetch('venta/agregar_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}

function cargarEliminarVenta()
{
    fetch('venta/eliminar_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('divEliminar').innerHTML=datos;
                   });
}

function cargarReporteVenta()
{
    fetch('venta/reporte_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}

function cargarBusquedaVenta()
{
    fetch('venta/buscar_venta.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_venta').innerHTML=datos;
                   });
}

function mandarConfirmacionEliminar()
{
    alert("Se elimino la venta");
}

function generarClaveUnicaVenta() {
    let clave_unica_venta = "OQV-"+Math.floor(Math.random()*999999);
    
     document.getElementById("txtClaveUnicaVenta").value = clave_unica_venta;
}
