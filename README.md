# DesarrolloFront-End_ProyectoFinal
Proyecto final del módulo Desarrollo Front-End

Creación de un formulario para crear una cuenta ficticia de acceso a una página web con el siguiente aspecto:

![image](https://user-images.githubusercontent.com/52462946/216766927-66df8f5f-92e6-491a-9341-36dbf6bbd1f4.png)

Se hacen las siguientes validaciones:

- Creación de estilos necesarios para los casos en los que las validaciones son correctas (color verde + icono de validación) y para los casos en las que no lo sean (color rojo + icono de error). 

Se muestra el ejemplo en el siguiente pantallazo:

![image](https://user-images.githubusercontent.com/52462946/216767042-87fcd685-1daf-44ff-bc04-1523a3fec8e3.png)

- Todos los campos son obligatorios ya que si no, saltará un error que se muestra a continuación:

![image](https://user-images.githubusercontent.com/52462946/216767055-16780314-65cb-4f0c-b40f-191e946024bf.png)

Además, se cumplen las siguientes condiciones:

- El campo Nombre es de tipo texto sin caractéres numéricos admitidos.
- El campo Email es tipo mail gracias a las expresiones regulares.
- El campo Clave tiene como máximo 8 caracteres.
- El valor introducido en los campos Clave y Confirme su clave son idénticos, si no devolverá un error.
- Si todos los datos introducidos son correctos, al pulsar sobre el botón ENVIAR saldrá una alerta por pantalla informando que la inscripción ha sido correcta.


