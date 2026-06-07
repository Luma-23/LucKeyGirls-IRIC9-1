let usuarios =
JSON.parse(localStorage.getItem("usuarios")) || [];

function guardarUsuario() {

    const nombre =
    document.getElementById("nombre").value;

    const correo =
    document.getElementById("correo").value;

    if(nombre === "" || correo === ""){

        alert("Complete todos los campos");
        return;
    }

    usuarios.push({
        nombre,
        correo
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mostrarUsuarios();

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
}

function mostrarUsuarios() {

    const tabla =
    document.getElementById("tablaUsuarios");

    tabla.innerHTML = "";

    usuarios.forEach((usuario, index) => {

        tabla.innerHTML += `
        <tr>

            <td>${usuario.nombre}</td>

            <td>${usuario.correo}</td>

            <td>

                <button
                class="btn btn-warning btn-sm"
                onclick="editarUsuario(${index})">

                Editar

                </button>

                <button
                class="btn btn-danger btn-sm"
                onclick="eliminarUsuario(${index})">

                Eliminar

                </button>

            </td>

        </tr>
        `;
    });
}

function eliminarUsuario(index){

    usuarios.splice(index,1);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mostrarUsuarios();
}

function editarUsuario(index){

    const nuevoNombre =
    prompt(
        "Nuevo nombre",
        usuarios[index].nombre
    );

    const nuevoCorreo =
    prompt(
        "Nuevo correo",
        usuarios[index].correo
    );

    usuarios[index].nombre = nuevoNombre;
    usuarios[index].correo = nuevoCorreo;

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mostrarUsuarios();
}

mostrarUsuarios();
