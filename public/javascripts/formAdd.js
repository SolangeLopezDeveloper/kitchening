console.log('formAdd.js vinculacion exitosa!');
console.log('formAdd.js vinculacion exitosa!');
const $ = id => document.getElementById(id)
const form = $('form-add-product')
const inputTitle = $('title')
const inputPrice = $('price')
const inputDiscount = $('discount')
const textAreaDescription = $('description')
const selectChef = $('chef')
const selectCategory = $('category')
const inputImages = $('images')

//contador
let maxCharacters = 500;
let numberCharacters = 500;


const msgError = (element, message, { target }) => {

  $(element).innerHTML = message
  target.classList.add('is-invalid')

}
const cleanError = (element, { target }) => {
  target.classList.remove('is-valid')
  target.classList.remove('is-invalid')
  $(element).innerHTML = null
}

inputTitle.addEventListener('blur', function (event) {
  switch (true) {
    case !this.value.trim():
      msgError('titleError', "Debes ingresar el titulo del curso!", event)
      break;
    case this.value.trim().length < 10:
      msgError('titleError', "El titulo debe tener al menos 10 caracteres!", event)
      break;
    default:
      this.classList.add('is-valid')
      break;
  }
})
inputTitle.addEventListener('focus', function (event) {
  cleanError('titleError', event)

})
inputPrice.addEventListener('blur', function (event) {
  switch (true) {
    case !this.value.trim():
      msgError('priceError', "Debes ingresar el precio del curso!", event)
      break;
    case this.value < 0:
      msgError('priceError', "El precio debe ser mayor a cero!", event)

      break;
    default:
      this.classList.add('is-valid')
      break;
  }
})
inputPrice.addEventListener('focus', function () {
  cleanError('priceError', event)
})

inputDiscount.addEventListener('blur', function (event) {
  if (this.value < 0) {
    msgError('discountError', 'Solo números positivos', event)
  } else {
    this.classList.add('is-valid')
  }
})
inputDiscount.addEventListener('focus', function () {
  cleanError('discountError', event)
})

selectChef.addEventListener('blur', function (event) {
  if (!this.value) {
    msgError('chefError', 'Debes ingresar un chef', event)
  } else {
    this.classList.add('is-valid')
  }
})
selectChef.addEventListener('focus', function () {
  cleanError('chefError', event)
})
selectCategory.addEventListener('blur', function (event) {
  if (!this.value) {
    msgError('categoryError', 'Debes ingresar una categoría', event)
  } else {
    this.classList.add('is-valid')
  }
})
selectCategory.addEventListener('focus', function () {
  cleanError('categoryError', event)
})


textAreaDescription.addEventListener('blur', function (event) {
  switch (true) {
    case !this.value.trim():
      msgError('descriptionError', "Debes ingresar la descripción del curso!", event)
      break;
    case this.value.trim().length < 20:
      msgError('descriptionError', "La descripción debe tener al menos 20 caracteres!", event)
      break;
    case this.value.trim().length > 500:
      msgError('descriptionError', "La descripción debe tener como máximo 500 caracteres!", event)
      break;
    case this.value.trim().length > 500:
      msgError('descriptionError', "La descripción debe tener como máximo 500 caracteres!", event)
      break;
    default:
      this.classList.add('is-valid')
      break;
  }
})
textAreaDescription.addEventListener('focus', function (event) {
  cleanError('descriptionError', event)

})

textAreaDescription.addEventListener('keyup', function (event) {
  numberCharacters = maxCharacters - +this.value.length;
  $('numberCharacters').innerHTML = numberCharacters;
  if (numberCharacters <= 0) {
    $('descriptionInfo').hidden = true
    msgError('descriptionError', "Máximo 500 caracteres!", event)
  } else {
    $('descriptionInfo').hidden = false
  }

})
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let error = false;
  for (let i = 0; i < this.elements.length - 3; i++) { //elements viene con JS son todos los campos de un formulario
    if (!this.elements[i].value || this.elements[i].classList.contains('is-invalid')) {
      error = true
    }

  }

  if (!error) {
    this.submit
  } else {
    for (let i = 0; i < this.elements.length - 3; i++) {
      !this.elements[i].value && this.elements[i].classList.add('is-invalid')

      if(this.elements[i].id === "images" && this.elements[i].files.length === 0){
        $('btnImages').classList.add('btn-danger')
      } 
    }
    $('formError').innerHTML = "Los campos señalados son obligatorios!"
  }//si hay errores el formulario no se envia, de l contrario se envia.
})

const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
inputImages.addEventListener('change', function (event) {
  $('btnImages').innerHTML = 'Agregar imágenes'
  switch (true) {
    case !regExExt.exec(this.value):
      $('imagesError').innerHTML = "Sólo se admiten imágenes jpg | jpeg | png | gif | webp"
      $('boxImagesPreview').innerHTML = null;
      break;
    case this.files.length > 3: $
      $('imagesError').innerHTML = "Se admiten hasta tres imágenes"
      $('boxImagesPreview').innerHTML = null;
      break;

    default:
      cleanError('imagesError', event);
      $('btnImages').innerHTML = 'Cambiar imágenes';
      $('btnImages').classList.remove('btn-danger')
      if (this.files) {
        [].forEach.call(this.files, readAndPreview)
      }

      function readAndPreview(file) {
        let reader = new FileReader()
        $('boxImagesPreview').innerHTML = null;
        reader.addEventListener('load', function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          $('boxImagesPreview').appendChild(image)
        })
        reader.readAsDataURL(file)
      }
      break;
  }
})
/*   if(!this.value){
    msgError('imagesError', 'Debes ingresar al menos una imagen',event)
  } else{
    this.classList.add('is-valid')
  }
})
inputImages.addEventListener('focus', function(){
 cleanError('imagesError',event)
})
 */
