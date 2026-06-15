function logout() {
    registrarLog("admin", "logout");
    localStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
}
