let estudiantes = [{
    id: 1,
    nombre: 'juan',
    edad: 26,
    hincha: 'nacional',
    nota: 4.2
},
{ 
    id: 2,
    nombre: 'Francia',
    edad: 28,
    hincha: 'medellin',
    nota: 4.6
}, 
{
    id: 3,
    nombre: 'Carlos',
    edad: 22,
    hincha: 'nacional',
    nota: 4.1
}];

let buscador = estudiantes.find(function(e){
    return e.id == 3;

})

let filtro = estudiantes.filter(function(e){
    return e.id == 3;

})

let busqueda = estudiantes.some(function(e){
    return e.id == 3;

})

console.log(buscador);
console.log(filtro);
console.log(busqueda);
