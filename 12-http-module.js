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