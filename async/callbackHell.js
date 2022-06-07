function hola(nombre, miCallback) { 
    //Inicio del callback
    setTimeout(function() {
        console.log('Hola,'+ nombre);
        miCallback();
    },1000);
}

function hablar(callbackHablar){
setTimeout(function(){
    console.log('bla bla bla bla');
    callbackHablar();
},1000)
}

function adios(nombre, otroCallback) { 
    //Inicio del callback
    setTimeout(function() {
        console.log('adios,'+ nombre);
        otroCallback();
    },1000);
}
//Funcion recursiva 
function conversacion(nombre, veces, callback){
    if (veces >=0 ) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('inicinado Proceso...');
hola('Missael', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Profeso terminado');
    });
})
// hola('Missael',function (){
//     hablar(function() {
//         adios('Missael', function(){
//             console.log('terminado Proceso...');
//     })
//     });
// });
