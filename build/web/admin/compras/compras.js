function cargarAgregarCompra()
{
    fetch('compras/agregar_compras.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_compras').innerHTML = datos;
            });
}

function cargarReporteCompras()
{
    fetch('compras/reporte_compras.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_compras').innerHTML=datos;
                   });
}

function cargarBusquedaCompras()
{
    fetch('compras/buscar_compras.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_compras').innerHTML=datos;
                   });
}


