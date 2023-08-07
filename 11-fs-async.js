// the fs (file system) module (async)

console.log('start')
const {readFile, writeFile} = require('fs');
const { isBuffer } = require('util');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result: 
            ${first}, 
            ${second}`,
        (err, result)=> {
            if(err){
                console.log(err)
                return
            }
            console.log('done writing text')
        }    
            ) //this will append the file.
    })
})

console.log('starting the next task')