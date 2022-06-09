const fs = require('fs');


//Leer Archivo

function Leer(ruta, cb){
    fs.readFile(ruta, (err, data ) => {
        console.log(data.toString());
    })
}

Leer (__dirname + '/archivo.txt')