console.log('Hola missael');

//Para seguir corriendo
setInterval(function(){
    console.log('Sigo Activo');
}, 1000);

//Para seguir corriendo
var i = 0;
setInterval(function(){
    console.log(i);
    i++;
    if (i === 5 ){
        console.log('Forzamos error');
        var a= 3 + z;
    }
}, 1000);
console.log('Parte 2 corriendo');