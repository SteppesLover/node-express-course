const { error } = require('console');
const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./01-node-tutorial/answers/content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./01-node-tutorial/answers/content/second.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './01-node-tutorial/answers/content/result-async.txt', 
            `Here is the result: ${first}, ${second}`
        ,(err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task')