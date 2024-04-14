const http=require('http');
const fs=require('fs');
const port=3001;

const server=http.createServer((req,res)=>{

    if(req.url=='/'){
        res.setHeader('Content-Type', 'text/html');
        let data=fs.readFileSync('./home.html');
        res.write(data);
   res.end();
    }
    else if(req.url=='/style.css'){
        res.setHeader('Content-Type', 'text/css');
        let data=fs.readFileSync('./style.css');
        res.write(data);
   res.end();

    }

    else if(req.url=='/task.jpg'){
        res.setHeader('Content-Type','text/image');
        let data=fs.readFileSync('./task.jpg');
        res.write(data);
    }
     
});

server.listen(port,'localhost',(err)=>{
    if(err){
        console.log("unable to start server");
    }
    console.log("Server started...");
    console.log(`http://localhost:${port}`);
})