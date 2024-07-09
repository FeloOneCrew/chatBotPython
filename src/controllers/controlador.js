function cambiarCaja(){
    let boton = document.getElementById("botonChat")
    let cajachat = document.getElementById("cajaChat")
    
    if(cajachat.style.display == 'none' || cajachat.style.display == ''){
        cajachat.style.display ="block"

    }else{
        cajachat.style.display ="none"
    }
}