let logs = JSON.parse(localStorage.getItem("logs")) || [];

// POST /api/logs
function registrarLog(usuario, accion) {
    const nuevoLog = {
        usuario: usuario,
        fecha: new Date().toLocaleString(),
        ip: "127.0.0.1",
        accion: accion
    };

    logs.push(nuevoLog);

    localStorage.setItem("logs", JSON.stringify(logs));
}

// GET /api/logs
function obtenerLogs() {
    return JSON.parse(localStorage.getItem("logs")) || [];
}
