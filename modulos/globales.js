//Funciones globales
var i = 0 ;
var intervalo = setInterval(function () {
    console.log('Node,js');
    if(i ===3 ) {
        clearInterval(intervalo);
    }
    i++;
},1000);

//Forma Asincrona 
setImmediate(function () {
    console.log('Node 1');
});

//Funcion 
console.log(process);

//Donde esta el directorio
console.log(__dirname);

//Fichero de globales
console.log(__filename);

