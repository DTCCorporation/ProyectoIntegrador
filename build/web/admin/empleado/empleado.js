function cargarAgregarEmpleado()
{
    fetch('empleado/agregar_empleado.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_empleados').innerHTML=datos;
                   });
}

function cargarReporteEmpleados()
{
    fetch('empleado/reporte_empleados.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_empleados').innerHTML=datos;
                   });
}

