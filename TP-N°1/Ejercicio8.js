//Ejercicio 8: Filtrar y transformar alertas de seguridad
//Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y
//transfórmalas en mensajes para el administrador.

const dispositivos = [
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
  { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
  { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
  { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

// Informe combinando dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
  const origen = dispositivos.find(d => d.ip === conexion.origen);
  const destino = dispositivos.find(d => d.ip === conexion.destino);

  return {
    origen: origen?.nombre || conexion.origen,
    destino: destino?.nombre || conexion.destino,
    protocolo: conexion.protocolo,
    bytes: conexion.bytes,
    nivel: evaluarRiesgo(conexion)
  };
});

// Función para asignar nivel de riesgo según reglas
function evaluarRiesgo(conexion) {
  if (conexion.protocolo === "MySQL" && conexion.bytes > 9000) {
    return "alto";
  } else if (conexion.bytes > 8000) {
    return "medio";
  }
  return "bajo";
}

// Filtrar alertas de nivel alto
const alertasAltas = informeActividad
  .filter(item => item.nivel === "alto")
  .map(alerta =>
    `ALERTA ALTA: Conexión sospechosa desde ${alerta.origen} hacia ${alerta.destino} usando ${alerta.protocolo} (${alerta.bytes} bytes)`
  );

console.log("Informe de actividad de red:", informeActividad);
console.log("Mensajes para el administrador:");
console.log(alertasAltas);