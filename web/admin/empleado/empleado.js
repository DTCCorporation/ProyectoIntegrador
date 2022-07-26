function cargarAgregarEmpleado()
{
    fetch('empleado/agregar_empleado.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function cargarReporteEmpleados()
{
    fetch('empleado/reporte_empleados.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function cargarBusquedaEmpleado()
{
    fetch('empleado/buscar_empleado.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_empleados').innerHTML = datos;
            });
}

function generarNumeroUnicoEmpleado() {
    let paterno = document.getElementById('txtApellidoPaternoE').value;
    let materno = document.getElementById('txtApellidoMaternoE').value;
    
    let letra1 = paterno.substring(0,2);
    let letra2 = materno.substring(0,1);
    
    let numero_unico = letra1+letra2+"-"+Math.floor(Math.random()*9999);

    document.getElementById("txtNumeroUnicoEmpleado").value = numero_unico;
}
