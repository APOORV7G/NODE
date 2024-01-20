const {readFile,writeFile}=require('fs')
readFile
('./content/first.txt','utf-8',(err,result)=>//if there is some error this can handle that error.
 {
    if(err)
    {
     console.log(err)
     return
    }
    const file1=result
    readFile('./content/second.txt','utf-8',(err,result)=>//this is becoming a pyramid of doom AKA callBack Hell
    {
        if(err)
        {
         console.log(err)
         return
        }
        writeFile(
            './content/result-async.txt',
            `${file1}${result}`,
            {flag:'a'},
            (err,result)=>
        {
         if(err)
         {
            console.log(err)
            return
         }
         console.log(`File written succesfully`)
        })
    }
    )
 }
)