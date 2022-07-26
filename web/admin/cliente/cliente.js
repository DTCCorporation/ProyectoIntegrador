function cargarAgregarCliente()
{
    fetch('cliente/agregar_cliente.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function cargarReporteCliente()
{
    fetch('cliente/reporte_clientes.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function cargarBusquedaCliente()
{
    fetch('cliente/buscar_cliente.html')
    .then(respuesta => {
                         return respuesta.text();
                        })
    .then(datos => {
                    document.getElementById('contenedor_clientes').innerHTML=datos;
                   });
}

function generarNumeroUnicoCliente() {
    let paterno = document.getElementById('txtApellidoPaternoC').value;
    let materno = document.getElementById('txtApellidoMaternoC').value;
    
    let letra1 = paterno.substring(0,2);
    let letra2 = materno.substring(0,1);
    
    let numero_unico = letra1+letra2+"-"+Math.floor(Math.random()*9999);

    document.getElementById("txtNumeroUnicoCliente").value = numero_unico;
}
