function cargarAgregArarmazon()
{
    fetch('producto/armazon/agregar_armazon.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_armazon').innerHTML=datos;
                   });
}

function cargarReporteArmazon()
{
    fetch('producto/armazon/reporte_armazon.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_armazon').innerHTML=datos;
                   });
}

function cargarBuscarArmazon()
{
    fetch('producto/armazon/buscar_armazon.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_armazon').innerHTML=datos;
                   });
}


