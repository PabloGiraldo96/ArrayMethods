let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

//recorrer el arreglo y filtrar con alguna condicion

let filtro = numeros.filter(function(numero){
    return numero >= 5;
})

console.log(numeros);
console.log(filtro);
