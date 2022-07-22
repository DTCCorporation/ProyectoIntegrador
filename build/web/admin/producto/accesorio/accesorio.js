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
