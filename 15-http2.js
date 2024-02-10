const http= require('http')
const server =http.createServer((req,res)=>{
    const url=req.url
    if(url=== '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1>hello home page</h1>`)
        res.end()//always necessary 
    }
    else if(url === '/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1>about page</h1>`)
        res.end()//always necessary 
    }
    else
    {
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`<h1>page not found</h1>`)
        res.end()//always necessary 
    }

})
server.listen(60001)
