const fs = require('fs');


//Leer Archivo

function Leer(ruta, cb){
    fs.readFile(ruta, (err, data ) => {
        console.log(data.toString());
    })
}

function Escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido, function(err) {
        if (err) {
            console.error('no he modido escribir',err);
        }else {
            console.log('se ha escrito correcto');
        }
    })

}

Escribir (__dirname + '/archivo1.txt','soy el tema nuevo', console.log());
//Leer (__dirname + '/archivo.txt')