const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./01-node-tutorial/answers/content/first.txt', 'utf8')
const second = readFileSync('./01-node-tutorial/answers/content/second.txt', 'utf-8')

console.log(first, second)
writeFileSync('./01-node-tutorial/answers/content/result-sync.txt',`Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)