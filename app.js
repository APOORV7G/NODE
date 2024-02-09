const http= require('http')
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<h1>hello home page</h1>`)
    res.end()//always necessary 
})
server.listen(60001)
