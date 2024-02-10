const express = require('express')
const app =express()

app.get('/',(req,res)=>{
    console.log('user hit the home page')
    res.status(200).send(`<h1>Hello home page</h1>`)
})

app.get('/about',(req,res)=>{
    console.log('user hit the about page')
    res.status(200).send(`<h1>About page</h1>`)
})

app.all('*',(req,res)=>{
    res.status(404)
    res.send(`<h1>Resource doesn't exist </h1>`)
})

app.listen(60001,()=>{
    console.log('Server is listening on 60001')
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen