function hola(nombre, miCallback) { 
    //Inicio del callback
    setTimeout(function() {
        console.log('Hola,'+ nombre);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback) { 
    //Inicio del callback
    setTimeout(function() {
        console.log('adios,'+ nombre);
        otroCallback();
    },1000);
}
console.log('inicinado Proceso...');
hola('Missael',function (){
    adios('Missael', function(){
        console.log('terminado Proceso...');
    });
});
