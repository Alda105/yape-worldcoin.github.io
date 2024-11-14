document.addEventListener('DOMContentLoaded', function() {
    const btnCopy = document.getElementById('btnCopy');
    const textArea = document.getElementById('textArea');
    const copyNotification = document.getElementById('copyNotification');

    btnCopy.addEventListener('click', function() {
      // Selecciona el contenido del textarea
      textArea.select();
      textArea.setSelectionRange(0, 99999); // Para dispositivos móviles

      // Intenta copiar el texto al portapapeles
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          // Muestra la notificación
          copyNotification.style.display = 'block';

          // Oculta la notificación después de 2 segundos
          setTimeout(function() {
            copyNotification.style.display = 'none';
          }, 2000);
        } else {
          throw new Error('La copia falló');
        }
      } catch (err) {
        console.error('Error al copiar el texto: ', err);
      }
    });
  });