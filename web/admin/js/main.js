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