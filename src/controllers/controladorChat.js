let botonSend = document.getElementById("botonSend")
let textoChat = document.getElementById("textoChat")
let mensajesChat = document.getElementById("mensajeChat")

let preguntas = [
    "¿Cúal es tu nombre?",
    "¿Cuantos años tienes?",
    "¿Cúal es tu pelicula favorita?",
    "¿Tienes mascotas?",
    "¿Cuál es tu hobbie?"
]

let respuestas = [
    "Hola, mi nombre es Leonardo", 
    "Tengo 1 año" , 
    "Revolver", 
    "si", 
    "Jugar tenis de mesa"
]

// variable para contar el numero de preguntas

let indicePregunta = 0

//Funcion para detectar el inicio y desarrollo de la conversacion

function procesarEntradaChat(){
    let escribeUsuario = textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario == "hola"){
        let listaPreguntas = preguntas.map((pregunta, index)=>`${index + 1}. ${pregunta}`).join('<br>')
        mensajesChat.innerHTML+=`<p class = "text-star">Hola Bienvenido <br> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta = parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajesChat.innerHTML+=`<p class = "text-star"> ${preguntas[numeroPregunta]}</p>`
            mensajesChat.innerHTML+=`<p class = "text-star"> ${respuestas[numeroPregunta]}</p>`
        }else{
            mensajesChat.innerHTML+=`<p class = "text-star"> Por favor ingrese una opcion válida</p>`
        }
    }
}

//Rutina para activar el chatbot
botonSend.addEventListener("click", procesarEntradaChat)
textoChat.addEventListener("keypress", function(evento){
    if(evento.key == "Enter"){
        evento.preventDefault()
        procesarEntradaChat()

    }
})