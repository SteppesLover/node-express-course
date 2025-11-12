const express = require('express');
const app = express ()
const peopleRouter = require('./routes/people')
const auth = require('./routes/auth')
const logger = require('./logger')
app.get('/', logger, (req, res) => {
    
})

//static assets
app.use(express.static('./methods-public'))
//parse form data

app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())
app.use(logger)

app.use('/api/people', peopleRouter)
app.use('/login', auth)




app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})