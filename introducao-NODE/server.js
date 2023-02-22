const http = require('http');                      //modulo nativo
const host = 'http://localhoust';
const port = 3000;
const status = require('./pcRamUsage.js');

//http.createServer().listen(port,()=>console.log('server funcionado'));

//ou

http.createServer((req, res) => {
    let url = req.url;

    if (url === 'status') {
        res.end(JSON.stringify(status,null,2));
    }else{
        res.end('<h1>sela bem vindo</h1>')
    }
}).listen(port, () => console.log(`server is running in ${host}:${port},${status}`));



