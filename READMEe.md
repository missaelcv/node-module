# node-module
node module

#Monohilo: implicaciones en diseño y seguridad
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
}}, 1000);
console.log('Parte 2 corriendo');

npm install -g nodemon

### **Installation**

The latest PM2 version is installable with NPM or Yarn:
$ npm install pm2@latest -g
# or
$ yarn global add pm2


### **Start an app**
$ pm2 start app.js

### **Display logs**
To display logs in realtime:
$ pm2 logs
