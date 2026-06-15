function generarToken() {
    const usuario = document.getElementById("usuario").value;

    if (usuario === "") {
        alert("Ingrese un usuario");
        return;
    }

    const token = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem("tokenRecuperacion", token);
    localStorage.setItem("usuarioRecuperacion", usuario);

    console.log("Token enviado al correo simulado:", token);

    alert("Token generado. Revise la consola para simular el envío de correo.");
}

function cambiarPassword() {
    const tokenIngresado = document.getElementById("token").value;
    const nuevaPassword = document.getElementById("nuevaPassword").value;

    const tokenGuardado = localStorage.getItem("tokenRecuperacion");

    if (tokenIngresado !== tokenGuardado) {
        alert("Token incorrecto");
        return;
    }

    if (nuevaPassword === "") {
        alert("Ingrese una nueva contraseña");
        return;
    }

    localStorage.setItem("passwordActualizada", nuevaPassword);

    alert("Contraseña actualizada correctamente");

    localStorage.removeItem("tokenRecuperacion");
}
