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