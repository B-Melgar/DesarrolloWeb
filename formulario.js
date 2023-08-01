<script>
  function validarFormulario() {
    // Validar Datos Generales
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const sexo = document.getElementById('sexo').value;

    if (!nombre || !fechaNacimiento || !direccion || !telefono || !sexo) {
      alert('Por favor, complete todos los campos de Datos Generales.');
      return false;
    }

    // Validar Datos de Pago con Tarjeta
    const numTarjeta = document.getElementById('numTarjeta').value;
    const titularTarjeta = document.getElementById('titularTarjeta').value;
    const fechaExpiracion = document.getElementById('fechaExpiracion').value;
    const cvv = document.getElementById('cvv').value;

    if (!numTarjeta || !titularTarjeta || !fechaExpiracion || !cvv) {
      alert('Por favor, complete todos los campos de Datos de Pago con Tarjeta.');
      return false;
    }

    alert('¡Formulario enviado correctamente!');
    return true;
  }
</script>
