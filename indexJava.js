const nombre=document.getElementById("name");
const apellidos=document.getElementById("apellidos");
const email=document.getElementById("email");
const password=document.getElementById("password");
const Vpassword=document.getElementById("Vpassword");
const form=document.getElementById("form");
const parrafo=document.getElementById("warnings");
const fecha=document.getElementById("fechaN");
const sickness=document.getElementById("sickness");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings=" ";
    let RegexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar=false;
    let tieneMayusculas = /[A-Z]/.test(password.value);
    let tieneNumeros = /[0-9]/.test(password.value);
    let tieneLetras = /[a-zA-Z]/.test(password.value);
    let tieneCaracteresEspeciales = /[#%&/]/.test(password.value);
    let SoloNumeros = /^\d+$/;

    parrafo.innerHTML=" ";

    if (nombre.value.length <= 6) {
       warnings+='El nombre no es válido.<br>';
       entrar=true;
    }

    if(/[^a-zA-Z0-9]+/.test(nombre.value)){
        warnings+='El nombre no debe contener letras especiales. <br>';
        entrar=true;
    }

    if (apellidos.value.length <= 6) {
        warnings+='El apellido no es válido.<br>';
        entrar=true;
     }

    if(!RegexEmail.test(email.value)){
    warnings+='El email no es válido.<br>';
    entrar=true;
    }
    if (!(tieneMayusculas && tieneNumeros && tieneLetras && tieneCaracteresEspeciales)) {
        switch (true) {
            case !tieneMayusculas:
                warnings += 'La contraseña  Debe contener al menos una letra mayúscula.<br>';
            case !tieneNumeros:
                warnings += 'La contraseña  Debe contener al menos un número.<br>';
                
            case !tieneLetras:
                warnings += 'La contraseña  Debe contener al menos una letra.<br>';
               
            case !tieneCaracteresEspeciales:
                warnings += 'La contraseña  Debe contener al menos un carácter especial (#, %, /, &).<br>';
             
            default:
                warnings += 'La contraseña no es válida.<br>';
        }
    
        entrar = true;
    }
    if(password.value.length < 15){
        warnings += 'La contraseña tiene que tener al menos 15 letras.<br>';
        entrar=true;
    }
    if(password.value!==Vpassword.value){
        warnings+='las contraseñas tienen que ser iguales. <br>'
        entrar=true;
    }

    if(entrar==true){
        parrafo.innerHTML=warnings;
    }
});

fecha.addEventListener("change", function() {
    var hoy = new Date();
    var cumpleanos = new Date(this.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    document.getElementById(id="mostrarEdad").innerHTML = edad;
})

sickness.addEventListener("change", function() {
    show = document.getElementById('Panel');
    if(this.checked){
        show.style.display = '';
    }
    else{
        show.style.display = 'none';
    }
})

function ocultar() {
    show = document.getElementById('Panel');
    show.style.display = 'none';
}
