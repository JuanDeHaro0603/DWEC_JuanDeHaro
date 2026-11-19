export function obtenerEstado() {
    return{
        estado: "online",
        version: "1.0.0",
        fecha: new Date().toLocaleDateString()
    }
}