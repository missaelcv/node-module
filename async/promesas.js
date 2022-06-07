function hola(nombre,) { 
    //Inicio del callback
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Hola,'+ nombre);
          resolve();
        },1000);
    })  
}

function hablar(callbackHablar){
setTimeout(function(){
    console.log('bla bla bla bla');
    callbackHablar();
},1000)
}

function adios(nombre, otroCallback) { 
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

//--
console.log('Iniciando proceso');
hola('maileny')
    .then((nombre) => {
        console.log('Iniciando proceso');
        })
