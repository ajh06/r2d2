const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This is home page');
    }
    else if(req.url === '/about'){
        res.end('This is about page');
    }
    else{
        res.end(`
        <p>Error! instead go to</p> 
        <a href="http://localhost:5000/"> go home </a>
        `
)
    }
})

server.listen(5000);

