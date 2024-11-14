const sign_in_btn = document.querySelector("#sign-in-btn");
const btnlogin = document.querySelector("#btnlogin");
const container = document.querySelector(".container");
const loadingText = document.querySelector('.loading-text');
const progress = document.querySelector('.progress');
const imagenConfirmacion = document.getElementById('imagenConfirmacion');
const containerCopy = document.getElementById('containerCopy');
const btnCopy = document.getElementById('btnCopy');
const textArea = document.getElementById('textArea');
const copyNotification = document.getElementById('copyNotification');
const titleCopy = document.getElementById('titleCopy');





let dots = '', progressWidth = 0;


if (containerCopy) {
  containerCopy.style.display = 'none';
}
if (btnCopy) {
  btnCopy.style.display = 'none';
}

if (textArea) {
  textArea.style.display = 'none';
}

if (titleCopy) {
  titleCopy.style.display = 'none';
}




const textInterval = setInterval(()=> {
  loadingText.textContent = 'Creando tu dirección' + (dots = dots.length < 5 ? dots + '.' : '');
}, 450)

const progressInterval = setInterval(() => {
  progress.style.width = (progressWidth += 1.5) + '%';

  if(progressWidth >= 100){
    clearInterval(textInterval);
    clearInterval(progressInterval);
    loadingText.innerHTML = '¡Dirección de Binance creada! <i class="fas fa-check-circle" style="color: green; margin-left: 10px;"></i>';

    document.querySelector('.loader').style.display = 'none';
  
  
  
  imagenConfirmacion.style.display = 'block';

  if (containerCopy) {
    containerCopy.style.display = 'block'; // Usar 'flex' según tu diseño
  }


  // Mostrar el botón de copiar
  if (btnCopy) {
    btnCopy.style.display = 'block'; // Usar 'block' en minúsculas

  
  if(textArea){
    textArea.style.display ='block';
  }

  if(titleCopy) {
    titleCopy.style.display = 'block';
  }

  

    

  
}
}}, 450);





btnCopy.addEventListener('click', () => {
  // Seleccionar el texto del textarea
  if (textArea) {
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textArea.value)
      .then(() => {
        // Mostrar la notificación de copia
        if (copyNotification) {
          copyNotification.style.display = 'block';

          // Ocultar la notificación después de 2 segundos
          setTimeout(() => {
            copyNotification.style.display = 'none';
          }, 4000);
        }
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  }
});














btnlogin.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

