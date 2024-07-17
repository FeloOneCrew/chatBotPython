
let boton = document.getElementById("botonChat")
boton.addEventListener("click", function(){
    let cajachat = document.getElementById("cajaChat")
    if(cajachat.style.display == 'none' || cajachat.style.display == ''){
        cajachat.style.display ="block"

    }else{
        cajachat.style.display ="none"
    }
})