const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./01-node-tutorial/answers/content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../01-node-tutorial/answers/content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./01-node-tutorial/answers/content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
