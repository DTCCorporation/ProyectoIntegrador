function cargarModuloAgregarTratamiento()
{
    fetch('tratamientos/agregar_tratamiento.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloBuscarTratamiento()
{
    fetch('tratamientos/buscar_tratamiento.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}

function cargarModuloReporteTratamientos()
{
    fetch('tratamientos/reporte_tratamientos.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_principal').innerHTML=datos;
                   });
}
