//1) Suma de números únicos
//Tema: Arrays + Set + Funciones
//Consigna: Implementá sumUnique(nums) que reciba un array y devuelva la suma
//de los números únicos (ignora duplicados, ignora no-numéricos).

function sumUnique(nums) {
     const numeros = nums.filter(n => Number.isFinite(n))
     const unicos = new Set(numeros)
     return [...unicos].reduce((acc, n) => acc + n, 0);
}
console.log([sumUnique([1,2,2,3])]) //resultado 6
console.log([sumUnique([1,'2',2,3,'a'])]) //resultado 6
