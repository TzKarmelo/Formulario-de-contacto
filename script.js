document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const respuesta = document.getElementById('respuesta');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch('tu_archivo_de_procesamiento.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              respuesta.innerHTML = '<p>Mensaje enviado correctamente</p>';
              form.reset();
          } else {
              respuesta.innerHTML = '<p>Hubo un error al enviar el mensaje</p>';
          }
      })
      .catch(error => {
          respuesta.innerHTML = '<p>Hubo un error al enviar el mensaje</p>';
      });
  });
});
