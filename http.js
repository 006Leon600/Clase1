const http = require('http');

http.createServer((request,response) =>{


    response.writeHead(200, {

        'Content-Type': 'text-plain'
    })

    response.write("Hola mundillo");

    response.end();
    
}).listen(6969);