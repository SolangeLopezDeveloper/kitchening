console.log(' vinculacion exitosa!')

const $ = (id) => document.getElementById(id)

const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("is-invalid");
  };
  
  const cleanError = (element, { target }) => {
    target.classList.remove("is-invalid");
    target.classList.remove("is-valid");
    $(element).innerHTML = null;
  };
  
  const checkedFields = () => {
    const elements = $("formRegister").elements;
    $("error-form").innerHTML = null;
  
    for (let i = 0; i < elements.length - 2; i++) {
      if (elements[i].classList.contains("is-invalid")) {
        $("error-form").innerHTML = "Hay campos con errores o están vacíos";
      }
    }
  };
let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let regExPass2 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,12}$/;

$('name').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorName', "El nombre es obligatorio", e)
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 50:
            msgError('errorName', "Mínimo 2 y máximo 50 caracteres", e)
            break;
        case !regExLetter.test(this.value.trim()):
            msgError('errorName', "Sólo caracteres alfabéticos", e)
            break;
        default:
            this.classList.add('is-valid');
            checkedFields();
            break;
    }

})
$('name').addEventListener('focus', function (e) {
    cleanError('errorName', e)
})
$('surname').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorSurname', "El apellido es obligatorio", e)
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 50:
            msgError('errorSurname', "Mínimo 2 y máximo 50 caracteres", e)
            break;
        case !regExLetter.test(this.value.trim()):
            msgError('errorSurname', "Sólo caracteres alfabéticos", e)
            break;
        default:
            this.classList.add('is-valid');
            checkedFields();
            break;
    }

})
$('surname').addEventListener('focus', function (e) {
    cleanError('errorSurname', e)
})

$('email').addEventListener('blur', async function (e) {
    
    switch (true) {
        case !this.value.trim():
            msgError('errorEmail', "El email es obligatorio", e)
            break;
        case !regExEmail.test(this.value.trim()):
            msgError('errorEmail', "Debes ingresar un email válido", e)
            break;
            case await verifyEmail(this.value.trim()) :
            msgError('errorEmail', "El email ya se encuentra registrado!")    
            break;
        default:
            this.classList.add('is-valid');
            checkedFields();
            break;
    }

})
$('email').addEventListener('focus', function (e) {
    cleanError('errorEmail', e)
})
/*  ***Sintaxis de ASYNC-AWAIT-TRY-CATCH***
 const variable = async () => {
    try {
        let variable2 = await .....(
            {...
            }); 
         let variable3 = await variable2.json()
        return variable3
    } catch (error) {
        
    }
}  */
const verifyEmail = async (email) => {
    try {
        let response = await fetch(("/api/users/verify-email",{
            method: "POST",
            body:JSON.stringify({
                email:email
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        }));
        let result = await response.json();
        return result.data.existUser



    } catch (error) {
        console.log(error);
    }
}


const exRegs = {
    exRegMayu: /[A-Z]/,
    exRegMinu: /[a-z]/,
    exRegNum: /[0-9]/,
    exRegEsp: /[$@$!%*?&_-]/,
    exRegMin: /.{6,}/,
    exRegMax: /.{12}/
}

const validPassword = (element, exReg, value)=>{
    if(!exReg.test(value)){
        $(element).classList.add('text-danger')
    }else{
        $(element).classList.add('text-success')
        $(element).classList.remove('text-danger')
    }
}
const validMaxPassword = (element, exReg, value)=>{
    if(exReg.test(value)){
        $(element).classList.add('text-danger')
    }else{
        $(element).classList.add('text-success')
        $(element).classList.remove('text-danger')
    }
}

$('password').addEventListener('keyup', function(){
validPassword("mayu", exRegs.exRegMayu,this.value)
validPassword("minu", exRegs.exRegMinu,this.value)
validPassword("num", exRegs.exRegNum,this.value)
validPassword("esp", exRegs.exRegEsp,this.value)
validPassword("min", exRegs.exRegMin,this.value)
validMaxPassword("max", exRegs.exRegMax,this.value)
})

$('password').addEventListener('blur', function (e) {
    $('msgPassword').hidden = true
    switch (true) {
        case !this.value.trim():
            msgError('errorPassword', "La contraseña es obligatoria", e)
            break;
        case !regExPass.test(this.value.trim()):
            msgError('errorPassword', "La contraseña debe tener una mayúscula, una minúscula y un número", e)
            break;

        default:
            this.classList.add('is-valid');
            checkedFields();
            break;
    }

})
$('password').addEventListener('focus', function (e) {
    cleanError('errorPassword', e);
    $('msgPassword').hidden = false
})
$('password2').addEventListener('blur', function (e) {

    switch (true) {
        case !this.value.trim():
            msgError('errorPassword2', "Debes confirmar la contraseña!", e)
            break;
        case this.value.trim() !== $('password').value.trim():
            msgError('errorPassword2', "Las contraseñas no coinciden", e)
            break;

        default:
            this.classList.add('is-valid');
            checkedFields();
            break;
    }

})
$('password2').addEventListener('focus', function (e) {
    cleanError('errorPassword2', e)
})

$('terms').addEventListener('click', function(e){
this.classList.remove('is-invalid')

$('errorTerms').innerHTML = null

})

/* const checkedFields = () =>{

    const elements = $('formRegister').elements
    $('errorForm').innerHTML = null;
    for (let i = 0; i < elements.length -2; i++) {
        if(!element[i].classList.contains('is-invalid')){
            error = true;
            this.elements[i].classList.add('is-invalid')
            $('errorForm').innerHTML = "Debes completar los campos para continuar"
        }
} */

$('formRegister').addEventListener('submit', function(e){
    e.preventDefault();
    let error = false

    if(!$('terms').cheked){
        error = true;
        $('errorTerms').innerHTML = "Debes aceptar bases y condiciones"
    }

    for (let i = 0; i < this.elements.length -2; i++) {
        if(!this.elements[i].value.trim() || this.elements[i].classList.contains('is-invalid')){
            error = true;
            this.elements[i].classList.add('is-invalid')
            $('errorForm').innerHTML = "Debes completar los campos para continuar"
        }
        
    }
    !error && this.submit()
})