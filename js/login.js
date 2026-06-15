function login() {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "admin" && password === "1234") {

    registrarLog(usuario, "login");

    localStorage.setItem("sesionActiva", "true");

    window.location.href = "usuarios.html";
} else {
        alert("Usuario o contraseña incorrectos");
    }
}
