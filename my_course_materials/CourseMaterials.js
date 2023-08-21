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

// USING EXPRESS

// console.log('Express Tutorial')

// const http = require('http')
// const { readFileSync } = require('fs')

// // get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')


// const server = http.createServer((req, res)=>{
//     const url = req.url
//     // home page
//     if( url === '/'){
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write(homePage)
//         res.end()
//     }
//     // styles
//     else if (url === '/styles.css'){
//         res.writeHead(200, {'content-type':'text/css'})
//         res.write(homeStyles)
//         res.end()
//     }
//     // image/logo
//     else if (url === '/logo.svg'){
//         res.writeHead(200, {'content-type':'image/svg+xml'})
//         res.write(homeImage)
//         res.end()
//     }
//     // logic
//     else if (url === '/browser-app.js'){
//         res.writeHead(200, {'content-type':'text/javascript'})
//         res.write(homeLogic)
//         res.end()
//     }
//     else {
//         res.writeHead(404, {'content-type':'text/html'})
//         res.write('<h1> Page not found </h1>')
//         res.end()
//     }
    
// })

// server.listen(5000)

// // console.log(`user hit the server`);
// // console.log(req.method)
// // console.log(req.url)

const express = require('express');
const app = express();
const path = require('path')

// Files the server doesn't have to change. 
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     SSR - server side rendering
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, ()=> {
    console.log('server is listening on port 5000')
})


// app.get
// app.post
// app.put
// app.delete

// These just represent HTTP verbs

// app.all   response if we can't find resources
// app.use
// app.listen


//const express = require('express')
// const app = express()

// app.get('/', (req, res)=>{
//     console.log('User hit the resource')
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res)=>{
//     console.log('User hit the resource')
//     res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port 5000')
// })


// const express = require('express')
// const app = express();
// const {products} = require('./data')

// app.get('/', (req, res) => {
//     res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
// })

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//       const { id, name, image } = product
//       return { id, name, image }
//     })
  
//     res.json(newProducts)
//   })

// app.get('/api/products/:productID', (req, res) => {
//     // console.log(req);
//     // console.log(req.params)
//     const {productID} = req.params
//     const singleProduct = products.find((product) => product.id === Number(productID))
//     if(!singleProduct){
//         return res.status(404).send("product does not exist")
//     }
//     return res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//     console.log(req.params)
//     res.send("hello world")

// })

// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query);
//     const { search, limit } = req.query
//     let sortedProducts = [...products];

// if (search){
//     sortedProducts = sortedProducts.filter((product)=>{
//         return product.name.startsWith(search)
//     })
// }
// if (limit){
//     sortedProducts = sortedProducts.slice(0, Number(limit))
// }
// if( sortedProducts.length < 1 ){
//     // res.status(200).send('no products matched your search')
//     return res.status(200).json({success: true, data: []})
// }
// res.status(200).json(sortedProducts)
// })

// app.listen(5000, () => {
//     console.log('Server is listening on port 5000')
// })

// //const newProducts = products.map((product)=>{
//     // const {id, name, image} = product;
//     // return {id, name, image}