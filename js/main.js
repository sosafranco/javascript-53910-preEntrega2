/* ------------------------------ Arrray de alumnos ------------------------------ */

const alumnos = [
    { id: 6, nombre: "Juan", apellido: "Rodríguez", nota: 8, aprobado: true },
    { id: 2, nombre: "María", apellido: "García", nota: 4, aprobado: false },
    { id: 9, nombre: "Ana", apellido: "López", nota: 9, aprobado: true },
    { id: 1, nombre: "Carlos", apellido: "Martínez", nota: 2, aprobado: false },
    { id: 8, nombre: "Pedro", apellido: "Perez", nota: 5, aprobado: false },
    { id: 4, nombre: "Laura", apellido: "Gonzáles", nota: 3, aprobado: false },
    { id: 3, nombre: "Andrés", apellido: "Fernández", nota: 5, aprobado: false },
    { id: 7, nombre: "Sofía", apellido: "Sánchez", nota: 6, aprobado: true },
    { id: 10, nombre: "Javier", apellido: "Torres", nota: 1, aprobado: false },
    { id: 5, nombre: "Giuliana", apellido: "Ramírez", nota: 7, aprobado: true },
]

/* ----------------------------- Inicio del programa ----------------------------- */

function bienvenida() {
    alert(`¡Bienvenido al Campus de Coderhouse!`)

    let opcionDeInicio
    do {
        opcionDeInicio = parseInt(prompt(`Por favor, seleccione una opción:
        1- Acceder como profesor.
        2- Acceder como alumno.`).trim())

        switch (opcionDeInicio) {
            case 1:
                accederComoProfesor()
                break
            case 2:
                accederComoAlumno()
                break
        }
    } while (opcionDeInicio !== 1 && opcionDeInicio !== 2)
}
bienvenida()

/* ------------------------------ Inicio de sesión como profesor. ------------------------------ */

function accederComoProfesor() {

    let accsesoProfesor
    do {
        accsesoProfesor = parseInt(prompt(`Elija una de estas opciones:
        1- Iniciar Sesión.
        2- Registrarse.
        3- Salir a inicio.`).trim())

        switch (accsesoProfesor) {
            case 1:
                iniciarSesionProfesor()
                break
            case 2:
                registrarseProfesor()
                break
            case 3:
                alert(`Saliendo...`)
                return bienvenida()
            default:
                alert(`Opción no válida.`)
        }
    } while (accsesoProfesor !== 1 && accsesoProfesor !== 2 && accsesoProfesor !== 3)
}

function iniciarSesionProfesor() {
    const usuarioProfesor = "profe"
    const contraseñaProfesor = "1234"

    let usuarioProfesorIngresado = (prompt(`Ingrese su usuario.`).trim()).toLowerCase()
    let contraseñaProfesorIngresada = (prompt(`Ingrese la contraseña`).trim())

    if (usuarioProfesorIngresado === usuarioProfesor && contraseñaProfesorIngresada == contraseñaProfesor) {
        alert(`¡Bienvenido ${usuarioProfesor}!`)
        opcionesParaProfesor()
    } else {
        alert(`Error: Nombre de usuario y/o contraseña incorrectos. Por favor, vuelva a intentarlo.`)
        return iniciarSesionProfesor()
    }
}

function registrarseProfesor() {
    let pedirUsuarioProfe = (prompt(`Ingrese un nombre para su usuario.`).trim()).toLowerCase()
    let pedirContraseñaProfe = (prompt(`Ingrese una contraseña para su usuario.`).trim()).toLowerCase()

    alert(`Ahora deberá iniciar sesión con los datos que usted nos aportó.`)

    let validarUsuarioProfe = (prompt(`Ingrese su usuario.`).trim()).toLowerCase()
    let validarContraseñaProfe = (prompt(`Ingrese su contraseña.`).trim()).toLowerCase()

    if (validarUsuarioProfe == pedirUsuarioProfe && validarContraseñaProfe == pedirContraseñaProfe) {
        alert(`¡Bienvenido ${pedirUsuarioProfe}!`)
        opcionesParaProfesor()
    } else {
        alert(`Error: Nombre de usuario y/o contraseña incorrectos. Vuelva a intentarlo.`)
        return registrarseProfesor()
    }
}

function opcionesParaProfesor() {
    let opcionesProfesor
    do {
        opcionesProfesor = parseInt(prompt(`Seleccione una opción:
        1- Registrar nuevo alumno y subir nota.
        2- Ordenar o filtrar lista de alumnos.
        3- Buscar alumnos.
        4- Salir a inicio.`).trim())
        switch (opcionesProfesor) {
            case 1:
                alert(`Al parecer, nos comunicaron la faltante de un alumno y su respectiva nota, suba los datos al campus.`)
                registrarNuevoAlumno()
                break
            case 2:
                ordenarAlumnos()
                break
            case 3:
                buscarAlumno()
                break
            case 4:
                alert(`Saliendo...`)
                return bienvenida()
            default:
                alert(`Opción no válida.`)
                break
        }
    } while (opcionesProfesor !== 1 && opcionesProfesor !== 2 && opcionesProfesor !== 3)
}

/* ---------- Funciones para registrar las propiedades de un nuevo alumno al array. ---------- */

function registrarNuevoAlumno() {
    const nuevoAlumno = {}

    registrarId(nuevoAlumno)
    registrarNombre(nuevoAlumno)
    registrarApellido(nuevoAlumno)
    registrarNota(nuevoAlumno)

    let validacionRegistroAlumno
    do {
        validacionRegistroAlumno = parseInt(prompt(`Se encontraron los siguientes datos:
        ID: ${nuevoAlumno.id}
        Nombre: ${nuevoAlumno.nombre}
        Apellido: ${nuevoAlumno.apellido}
        Nota: ${nuevoAlumno.nota}
        Aprobado: ${nuevoAlumno.aprobado}

        Desea agregar éstos a la nube del campus?
        1- Sí.
        2- No.`).trim())

        switch (validacionRegistroAlumno) {
            case 1:
                alert(`Agregando los datos a la nube del campus. Aguarde un momento...`)
                alumnos.push(nuevoAlumno)
                alert(`Mostrando lista...`)
                mostrarListaAlumnos(alumnos)
                alert(`Volviendo...`)
                return opcionesParaProfesor()
            case 2:
                let preguntaAlProfesor
                do {
                    preguntaAlProfesor = parseInt(prompt(`¿Por qué no desea subir estos datos a la nube?
                    1- Quiero reingresar los datos.
                    2- Quiero retroceder a las opciones del profesor.
                    3- Quiero salir a inicio.`).trim())
                    switch (preguntaAlProfesor) {
                        case 1:
                            alert(`Estamos redirigiéndolo, aguarde un momento...`)
                            return registrarNuevoAlumno()
                        case 2:
                            alert(`Volviendo hacia opciones del profesor...`)
                            return opcionesParaProfesor()
                        case 3:
                            alert(`Saliendo...`)
                            return bienvenida()
                    }
                } while (preguntaAlProfesor !== 1 && preguntaAlProfesor !== 2 && preguntaAlProfesor !== 3)
                break
        }
    } while (validacionRegistroAlumno !== 1 && validacionRegistroAlumno !== 2)
}

function registrarId(nuevoAlumno) {
    nuevoAlumno.id = parseInt(prompt(`Ingrese el ID del alumno`))

    // Verifico si el ID ya existe en el array de alumnos.
    const idExistente = alumnos.some(alumno => alumno.id === nuevoAlumno.id)

    if (idExistente) {
        alert(`Error: id ya registrado.`)
        return registrarId(nuevoAlumno)
    } else if (isNaN(nuevoAlumno.id)) {
        alert(`Error: Ingrese datos válidos.`)
        return registrarId(nuevoAlumno)
    } else {
        alert(`¡Id registrado correctamente!`)
    }
}

function registrarNombre(nuevoAlumno) {
    nuevoAlumno.nombre = prompt(`Ingrese el nombre del alumno.`).trim()

    if (!/^[A-Za-z]+$/.test(nuevoAlumno.nombre)) {
        alert(`Error: Ingrese datos válidos.`)
        return registrarNombre(nuevoAlumno)
    } else {
        //Para que me tome el primer caracter en mayusc y lo demas en min. (por mas que escriba todo en min o mayusc.)
        nuevoAlumno.nombre = nuevoAlumno.nombre.charAt(0).toUpperCase() + nuevoAlumno.nombre.slice(1).toLowerCase()
        alert(`¡Nombre registrado!`)
    }
}

function registrarApellido(nuevoAlumno) {
    nuevoAlumno.apellido = prompt(`Ingrese el apellido del alumno.`).trim()

    if (!/^[A-Za-z]+$/.test(nuevoAlumno.apellido)) {
        alert(`Error: Ingrese datos válidos.`)
        return registrarApellido(nuevoAlumno)
    } else {
        //Para que me tome el primer caracter en mayusc y lo demas en min. (por mas que escriba todo en min o mayusc)
        nuevoAlumno.apellido = nuevoAlumno.apellido.charAt(0).toUpperCase() + nuevoAlumno.apellido.slice(1).toLowerCase()

        alert(`¡Apellido registrado!`)
    }
}

function registrarNota(nuevoAlumno) {

    do {
        nuevoAlumno.nota = parseInt(prompt(`Ingrese la nota del alumno.`).trim())
    } while (isNaN(nuevoAlumno.nota) || parseInt(nuevoAlumno.nota) <= 0 || parseInt(nuevoAlumno.nota) > 10)

    if (nuevoAlumno.nota <= 6) {
        nuevoAlumno.aprobado = false
        alert(`¡Nota registrada!`)
    } else {
        nuevoAlumno.aprobado = true
        alert(`¡Nota registrada!`)
    }
}

/* -------------------- Función para mostrar a los alumnos en manera de lista. -------------------- */

function mostrarListaAlumnos(alumnosMostrar) {
    const lista = alumnosMostrar.map(alumno =>
        `ID: ${alumno.id}, Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}, Nota: ${alumno.nota}, Aprobado: ${alumno.aprobado}`
    ).join('\n\n')

    alert(`Lista de Alumnos:\n\n${lista}`)
}

/* ----------- Funcion para darle a elegir al ususario de qué manera ordenar el contenido del array. ----------- */

function ordenarAlumnos() {

    let opcionesLista
    do {
        opcionesLista = parseFloat(prompt(`¿Quiere ordenar o filtrar la lista de los alumnos?
        1- Ordenar.
        2- Filtrar.
        3- Volver a opciones.`))

        switch (opcionesLista) {
            case 1:
                let opcionesLista1
                do {
                    opcionesLista1 = parseInt(prompt(`¿De qué manera quiere ordenar la lista?
                    1- ID.
                    2- Apellido.`).trim())

                    switch (opcionesLista1) {
                        case 1:
                            const alumnosOrdenadosPorId = [...alumnos]
                            alumnosOrdenadosPorId.sort((a, b) => a.id - b.id)
                            mostrarListaAlumnos(alumnosOrdenadosPorId)
                            return ordenarAlumnos()
                        case 2:
                            const alumnosOrdenadosPorApellido = [...alumnos]
                            alumnosOrdenadosPorApellido.sort((a, b) => a.apellido.localeCompare(b.apellido))
                            mostrarListaAlumnos(alumnosOrdenadosPorApellido)
                            return ordenarAlumnos()
                        default:
                            alert("Opción no válida.")
                    }
                } while (opcionesLista1 !== 1 && opcionesLista1 !== 2)
                break
            case 2:
                let opcionesLista2
                do {
                    opcionesLista2 = parseInt(prompt(`¿De qué manera quiere filtrar la lista?
                    1- Aprobados.
                    2- Desaprobados.`).trim())

                    switch (opcionesLista2) {
                        case 1:
                            let alumnosFiltradosAprobados = []

                            alumnosFiltradosAprobados = alumnos.filter(alumno => alumno.aprobado)
                            mostrarListaAlumnos(alumnosFiltradosAprobados)
                            return ordenarAlumnos()
                        case 2:
                            let alumnosFiltradosDesaprobados = []

                            alumnosFiltradosDesaprobados = alumnos.filter(alumno => !alumno.aprobado)
                            mostrarListaAlumnos(alumnosFiltradosDesaprobados)
                            return ordenarAlumnos()
                        default:
                            alert("Opción no válida.")
                    }
                } while (opcionesLista2 !== 1 && opcionesLista2 !== 2)
                break
            case 3:
                alert(`Volviendo a opciones...`)
                return opcionesParaProfesor()
            default:
                alert("Opción no válida.")
        }
    } while (opcionesLista !== 1 && opcionesLista !== 2 && opcionesLista !== 3)
}

/* -------------------- Función para buscar a un alumno. -------------------- */

function buscarAlumno() {
    const nombreBuscado = prompt("Ingrese el nombre o apellido del alumno que desea buscar:").trim().toLowerCase()
    const nombreBuscadoSinAcentos = quitarAcentos(nombreBuscado)

    const alumnoEncontrado = alumnos.find(alumno =>
        quitarAcentos(alumno.nombre.toLowerCase()).includes(nombreBuscadoSinAcentos) ||
        quitarAcentos(alumno.apellido.toLowerCase()).includes(nombreBuscadoSinAcentos)
    )

    if (alumnoEncontrado) {
        let mensaje = `Alumno encontrado:\n\nID: ${alumnoEncontrado.id}\nNombre: ${alumnoEncontrado.nombre}\nApellido: ${alumnoEncontrado.apellido}\nNota: ${alumnoEncontrado.nota}\nAprobado: ${alumnoEncontrado.aprobado}\n`
        alert(mensaje)
        return opcionesParaProfesor()
    } else {
        alert("Alumno no encontrado.")
        return buscarAlumno()
    }
}

/* -------------------- Función para quitar los acentos a un texto -------------------- */

function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* ------------------------------ Inicio de sesión como alumno. ------------------------------ */

function accederComoAlumno() {
    let accsesoAlumno
    do {
        accsesoAlumno = parseInt(prompt(`Elija una de estas opciones:
        1-Iniciar Sesión.
        2-Salir a Inicio.`).trim())

        switch (accsesoAlumno) {
            case 1:
                iniciarSesionAlumno()
                break
            case 2:
                alert(`Saliendo...`)
                return bienvenida()
            default:
                alert(`Opción no válida.`)
        }
    } while (accsesoAlumno !== 1 && accsesoAlumno !== 2)
}

function iniciarSesionAlumno() {
    const contraseñaAlumno = "1234"

    let idIngresado = parseInt(prompt(`Ingrese su ID.`).trim())
    let contraseñaAlumnoIngresada = (prompt(`Ingrese la contraseña`).trim())

    const idAlumnoEncontrado = alumnos.find(alumno => alumno.id === idIngresado)

    if (idAlumnoEncontrado && contraseñaAlumnoIngresada == contraseñaAlumno) {
        alert(`¡Bienvenido ${idAlumnoEncontrado.nombre}!`)
        opcionesParaAlumno(idIngresado, idAlumnoEncontrado)
    } else {
        alert(`Error: Nombre de usuario y/o contraseña incorrectos. Por favor, vuelva a intentarlo.`)
        return iniciarSesionAlumno()
    }
}

function opcionesParaAlumno(idIngresado, idAlumnoEncontrado) {
    let opcionesAlumno
    do {
        opcionesAlumno = parseInt(prompt(`Seleccione una opción:
        1- Ver Top 10 de alumnos.
        2- Ver información personal.
        3- Salir a inicio.`).trim())
        switch (opcionesAlumno) {
            case 1:
                mostrarTop10(idIngresado, idAlumnoEncontrado)
                return opcionesParaAlumno(idIngresado, idAlumnoEncontrado)
            case 2:
                informacionPersonalAlumno(idIngresado, idAlumnoEncontrado)
                return opcionesParaAlumno(idIngresado, idAlumnoEncontrado)
            case 3:
                alert(`Saliendo...`)
                return bienvenida()
            default:
                alert(`Opción no válida.`)
                break
        }
    } while (opcionesAlumno !== 1 && opcionesAlumno !== 2 && opcionesAlumno !== 3)
}

/* -------------------- Función para mostrar el Top10 de alumnos. -------------------- */

function mostrarTop10(idIngresado, idAlumnoEncontrado) {
    const alumnosOrdenadosPorNota = [...alumnos]
    alumnosOrdenadosPorNota.sort((a, b) => b.nota - a.nota)

    const mensajeTop10 = []
    let posicionAlumno = null

    for (let i = 0; i < 10 && i < alumnosOrdenadosPorNota.length; i++) {
        const alumno = alumnosOrdenadosPorNota[i]
        mensajeTop10.push(`${i + 1}. ${alumno.apellido} ${alumno.nombre} - Nota: ${alumno.nota}`)

        if (alumno.id === idIngresado) {
            posicionAlumno = i + 1
        }
    }

    let mensaje = `Top 10 Alumnos:\n\n${mensajeTop10.join('\n\n')}`

    if (posicionAlumno !== null) {
        mensaje += `\n\n¡Felicidades! Sos parte del Top 10!\nEstás en el puesto número: ${posicionAlumno}.`
    } else {
        mensaje += `\n\nUsted no está en el Top 10 :(`
    }

    alert(mensaje)
}

/* -------------------- Función para ver información personal del alumno. -------------------- */

function informacionPersonalAlumno(idIngresado, idAlumnoEncontrado) {
    let informacionAlumno = `ID: ${idAlumnoEncontrado.id}\nNombre: ${idAlumnoEncontrado.nombre}\nApellido: ${idAlumnoEncontrado.apellido}\nNota: ${idAlumnoEncontrado.nota}\nAprobado: ${idAlumnoEncontrado.aprobado}`

    alert(`Mi información:\n\n${informacionAlumno}`)
}
