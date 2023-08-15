// GLOBALS - NO WINDOW !!!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 

const amount = 12

if(amount<10){
    console.log('small number')
}
else{
    console.log('large number')
}

console.log(`Hey it's my first node app! Hello World!`)

console.log(__dirname)

setInterval(()=>{
    console.log('Hello World!')
}, 1000)

// Modules
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-modules')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// The OS module

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

// the path module
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// the fs (file system) module

const {readFileSync, writeFileSync} = require('fs');

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`Here is the result: 
${first}, 
${second}`,
{flag:'a'} //this will append the file.
)
console.log('done with this task')
console.log('starting the next task')

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

// the HTTP module

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Hello, welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('This is our about page.')
    }
    else {
        res.end(`
    <h1>Oops! Where are you?!</h1>
    <p>We can't seem to find the page you are looking for. <p>
    <a href="/">back home</a>
    `)
}
})

server.listen(5000)

// MODULE LOADING STUFF
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);

console.log(items)
console.log(newItems)

console.log('hello people')

