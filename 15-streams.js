const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    //encoding: 'utf8',
}
    ); //90KB of data

stream.on('data', (result) => {
    console.log(result)
})

stream.on('data', (result) => {
    console.log('result')
})




// BIG FILE CREATOR
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i ++ ){
//     writeFileSync('./content/big.txt', 
//     `hello world ${i}\n`, 
//     { flag: 'a'}
//     )
// }