# Password Gen
Generador de contraseñas mediante JavaScript


Es un código sencillo que tiene como función generar contraseñas a través de JavaScript. Dicho código puede ser incorporado en un marcador del navegador, permitiendo la creación de contraseñas con longitud variable en cualquier momento que se requiera.

## Modificación o creación de un marcador
Para utilizar este código, simplemente cree un nuevo marcador o edite uno existente, y en el campo de la URL, inserte el siguiente código:

```javaScript

javascript:(()=>{for(var caracteres="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",longitud=prompt("Por favor ingrese la longitud de la contraseña que desea generar:"),contrasena="",i=0;i<longitud;i++){var posicion=Math.floor(Math.random()*caracteres.length);contrasena+=caracteres.charAt(posicion)}alert("Su contraseña segura es: "+contrasena);})();

```
![image](https://user-images.githubusercontent.com/85700889/227834034-3148345b-75c2-4277-84d6-3379ab246cab.png)

## Modo de uso.
Para utilizarlo, simplemente haga clic en el marcador y se mostrará una ventana en la cual podrá ingresar la longitud de la contraseña deseada. Establezca la longitud preferida y presione aceptar.

![image](https://user-images.githubusercontent.com/85700889/227835122-f9b24b71-2629-41b6-ac15-82217647de48.png)

por último se mostrará la contraseña, copie la contraseña y péguela donde necesite

![image](https://user-images.githubusercontent.com/85700889/227835261-487cf07b-2067-4ffd-b943-d3ed2f43b312.png)
