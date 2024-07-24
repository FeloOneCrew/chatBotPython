let url = "http://localhost:8000/asegurachat"
let peticion = {
    method: "GET"
}

fetch(url, peticion)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
})


.catch(function(respuesta){
    console.log(respuesta)
})

let botonSend = document.getElementById("botonSend")
let textoChat = document.getElementById("textoChat")
let mensajesChat = document.getElementById("mensajeChat")

//mapear el arreglo de preguntar y el arreglo de respuestas
let preguntas = respuesta.map(function(pregunta){
    return pregunta.pregunta
})

let answers = respuesta.map(function(answer){
    return answer.respuesta
})
// variable para contar el numero de preguntas

let indicePregunta = 0

//Funcion para detectar el inicio y desarrollo de la conversacion

function procesarEntradaChat(){
    let escribeUsuario = textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario == "hola"){
        let listaPreguntas = preguntas.map((pregunta, index)=>`${index + 1}. ${pregunta}`).join('<br>')
        mensajesChat.innerHTML+=`<p class = "text-star fw-bold">Hola Bienvenido <br> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta = parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajesChat.innerHTML+=`<p class = "text-star"> ${preguntas[numeroPregunta]}</p>`
            mensajesChat.innerHTML+=`<p class = "text-end text-primary fw-bold"> ${respuestas[numeroPregunta]}</p>`
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

console.log(preguntas)
console.log(answers)