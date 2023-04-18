// let alertinicio = alert

// window.alert = (alertinicio)

var ventana_secundaria
          
function abrirVentana(){
    //guardo la referencia de la ventana para poder utilizarla luego
    ventana_secundaria = window.open("cerrar_window2.html","miventana","width=300,height=200,menubar=no")
}

function cerrarVentana(){
    //la referencia de la ventana es el objeto window del popup. Lo utilizo para acceder al método close
    ventana_secundaria.close()
}
