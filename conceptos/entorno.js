//Variables de entorno 
let saludo = 'hola';

console.log(saludo);

//Variables de entorno 
let nombre =  process.env.Nombre || 'Sin Nombre';
let web =  process.env.Mi_WEB || 'NO Tiene WEB';

console.log('Hola,'+ nombre);
