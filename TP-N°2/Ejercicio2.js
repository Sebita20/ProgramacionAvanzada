//2) Seleccionar propiedades
//Tema: Objetos + Funciones puras
//Consigna: Escribí pick(obj, keys) que devuelva un nuevo objeto con solo las
//claves indicadas (ignorar las que no existan).

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

const original = {a:1, b:2, c:3}
const result = pick(original, ['a', 'c', 'z'])
console.log(result)

