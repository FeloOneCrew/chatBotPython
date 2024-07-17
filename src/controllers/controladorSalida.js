import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyA5t7-XSz0H1ZeTQhI7gOt4ecup4DW7l_s",
    authDomain: "loginsuradual-felo.firebaseapp.com",
    projectId: "loginsuradual-felo",
    storageBucket: "loginsuradual-felo.appspot.com",
    messagingSenderId: "163330199693",
    appId: "1:163330199693:web:19b11c12ebc9d2438c12c4",
    measurementId: "G-MRS105NTF2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let avatar = document.getElementById("avatar")
  let botonsalir = document.getElementById("botonsalir")

  //Utilizando la informacion del usuario, auntenticado
  const auth =getAuth()
  onAuthStateChanged(auth, (user) => {
    if(user){
        let uid = user.uid
        avatar.classList.remove("invisible")
        avatar.textContent = user.email
    }else{

    }
  })

  botonsalir.addEventListener("click", function(){
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href = "./views/login.html"
    })
  })
