function cargarAgregarLentesContacto()
{
     fetch('presupuesto/lentes_contacto/agregar_lentes_contacto.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });
}

function cargarBuscarLentesContacto()
{
    fetch('presupuesto/lentes_contacto/buscar_lentes_contacto.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });
}

function cargarReporteLentesContacto()
{
 fetch('presupuesto/lentes_contacto/reporte_lentes_contacto.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_examen').innerHTML=datos;
                   });   
}

function mandarConfirmacionLentesContacto()
{
    alert("Se guardo y Notifico Correctamente");
}