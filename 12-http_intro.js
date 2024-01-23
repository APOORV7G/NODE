const http=require('http')
const server = http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end('Welcome to Home Page')
    }
     else if(req.url==='/about')
    {
        res.end('This is about')
    }
    else
    res.end(`
            <h1>Ooops this page doesn't exist</h1>
            <p> Please go back to home page </p>
            <a href="/">back home</a>
            `)
})
server.listen(60001)
