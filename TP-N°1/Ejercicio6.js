//Ejercicio 6: Calcular estadísticas de red
//Dado un objeto con estadísticas de tráfico de red por hora, calcula el total de
//datos transferidos y la hora con mayor tráfico.

const traficoRed = {
"08:00": 1250, 
"09:00": 1870,
"10:00": 2100,
"11:00": 1950,
"12:00": 1600,
"13:00": 1300,
"14:00": 1700,
"15:00": 2200,
"16:00": 1800,
"17:00": 1500
};

let total = 0;
let horaMax = "";
let maxTrafico = 0;

for (const hora in traficoRed) {
  const mb = traficoRed[hora];
  total += mb;

  if (mb > maxTrafico) {
    maxTrafico = mb;
    horaMax = hora;
  }
}

console.log("Total transferido:", total, "MB");
console.log("Hora con mayor tráfico:", horaMax, "con", maxTrafico, "MB");