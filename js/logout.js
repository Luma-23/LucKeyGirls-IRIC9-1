function logout() {
    localStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
}
