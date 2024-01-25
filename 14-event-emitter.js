const EventEmitter = require('events');
const customEmmiter =new EventEmitter()

customEmmiter.on('response',(name,id)=>{
    console.log(`data recieved ${name} and ${id}`)
    
})
// customEmmiter.on('response',()=>{
//     console.log(`some other logic here `)
// })
customEmmiter.emit('response','john',34)
//always listen for event => .on()
// then emit for the event => .emit()