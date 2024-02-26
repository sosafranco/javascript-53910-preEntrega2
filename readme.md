# SIMULACIÓN DE UN CAMPUS COLEGIAL

## Uso del programa

El programa comienza con una bienvenida y ofrece opciones para acceder como profesor o alumno. Luego, según el rol, se despliegan opciones específicas para realizar diferentes acciones.

Este README.md proporciona una descripción general de las principales funcionalidades del programa y cómo se accede a ellas. Para obtener más detalles sobre la implementación de cada función, consulte el código fuente proporcionado.

## FUNCIONALIDADES PARA PROFESOR

* ### `<i>` Inicio de sesión como profesor: `</i>`

  Los profesores pueden acceder al sistema ingresando su usuario y contraseña. Tienen la opción de iniciar sesión o registrarse si no tienen una cuenta.
* ### [Al Iniciar Sesión]

  + ### `<i>` Registrar nuevo alumno y subir nota: `</i>`

    Los profesores pueden registrar a un nuevo alumno en el sistema proporcionando su ID, nombre, apellido y nota. Luego se les solicita confirmar los datos antes de agregarlos a la lista de alumnos.
  + ### `<i>` Ordenar o filtrar lista de alumnos: `</i>`

    Los profesores pueden ordenar la lista de alumnos por ID o apellido, y también pueden filtrar la lista por alumnos aprobados o desaprobados.
  + ### `<i>` Buscar alumnos: `</i>`

    Permite a los profesores buscar un alumno por su nombre o apellido, mostrando la información del mismo.

## FUNCIONALIDADES PARA ALUMNOS

* ### `<i>` Inicio de Sesión como Alumno: `</i>`

  Los alumnos pueden acceder al sistema ingresando su ID y contraseña. Tienen acceso a opciones personalizadas después de iniciar sesión.
* ### [Al iniciar sesion] :

  + ### `<i>` Ver Top 10 de alumnos: `</i>`

    Los alumnos pueden ver el Top 10 de alumnos, que se muestra ordenado por nota. Si el alumno está en el Top 10, se le indicará en qué puesto se encuentra.
  + ### `<i>` Ver información personal: `</i>`

    Los alumnos pueden ver su información personal, incluyendo su ID, nombre, apellido, nota y estado de aprobación.

## FUNCIONES AUXILIARES

* ### `<i>` Función para mostrar la lista de alumnos: `</i>`

  La función `mostrarListaAlumnos(alumnosMostrar)` genera una lista formateada de alumnos con su ID, nombre, apellido, nota y estado de aprobación. Esta función es utilizada para mostrar la lista completa de alumnos o la lista filtrada después de ordenar o aplicar filtros.
* ### `<i>` Función para quitar acentos: `</i>`

  Se utiliza una función `quitarAcentos(texto)` para eliminar los acentos y caracteres diacríticos de un texto, lo que permite realizar búsquedas y comparaciones de manera insensible a los acentos.

## Resumen del programa

Este programa simula una plataforma de gestión de alumnos para un campus de una Institución Colegial. Permite a los profesores y alumnos realizar diversas operaciones, como registro y consulta de alumnos, ordenamiento y filtrado de listas, entre otros.

## Nota

Este código es una simulación y no utiliza bases de datos reales. Los datos y operaciones son almacenados en memoria durante la ejecución del programa.
