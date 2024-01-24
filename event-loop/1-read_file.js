const {readFile}=require('fs')
console.log("starting first task")
//check for path
readFile('../content/first.txt','utf-8',(err,res)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(res)
    console.log('Completed the first task')
})
console.log('Starting the next task')