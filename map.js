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

// mapeaando el arreglo de estudiantes

let mapa = estudiantes.map(e =>{
    e.hincha = 'nacional';
    e.nota = 4.7
    return e
});

console.log(mapa);