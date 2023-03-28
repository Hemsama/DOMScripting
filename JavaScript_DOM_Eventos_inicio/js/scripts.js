// querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent ='Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace')

// getElementById

// const head2 = document.getElementById('heading');
// console.log(head2)

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('H1')

// Agregar el href
nuevoEnlace.href ='nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);