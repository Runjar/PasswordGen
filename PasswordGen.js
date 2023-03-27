//Funcion generador contraseñas
function generarContrasena(longitud) {
  var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  var contrasena = "";

  for (var i = 0; i < longitud; i++) {
    var posicion = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(posicion);
  }

  return contrasena;
}

var longitud = prompt("Por favor ingrese la longitud de la contraseña que desea generar:");
var contrasenaGenerada = generarContrasena(longitud);
alert("Su contraseña segura es: " + contrasenaGenerada);
```
