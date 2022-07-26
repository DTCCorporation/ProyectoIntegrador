function cargarAgregarAccesorio()
{
    fetch('producto/accesorio/agregar_accesorio.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_accesorios').innerHTML=datos;
                   });
}

function cargarReporteAccesorio()
{
    fetch('producto/accesorio/reporte_accesorio.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_accesorios').innerHTML=datos;
                   });
}

function cargarBuscarAccesorio()
{
    fetch('producto/accesorio/buscar_accesorio.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_accesorios').innerHTML=datos;
                   });
}
