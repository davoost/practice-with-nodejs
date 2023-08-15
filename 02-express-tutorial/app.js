console.log('Express Tutorial')

const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res)=>{
    const url = req.url
    // HOME PAGE
    if( url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    // ABOUT PAGE
    else if (url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1> About Page </h1>')
        res.end()
    }
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1> Page not found </h1>')
        res.end()
    }
    
})

server.listen(5000)

// console.log(`user hit the server`);
// console.log(req.method)
// console.log(req.url)