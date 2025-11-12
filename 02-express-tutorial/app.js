const express = require('express');
const app = express ()
const peopleRouter = require('./routes/people')
const logger = require('./logger')
const cookieParser = require('cookie-parser')
app.get('/', logger, (req, res) => {
    
})

//static assets
app.use(express.static('./methods-public'))
//parse form data

app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())
app.use(cookieParser())
app.use(logger)

app.use('/api/people', peopleRouter)

const auth = (req, res, next) => {
  const { name } = req.cookies
  if (name) {
    req.user = name
    next()
  } else {
    res.status(401).json({ success: false, msg: 'Unauthorized' })
  }
}

app.post('/logon', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide a name' })
  }
  res.cookie('name', name, { httpOnly: true })
  res.status(201).json({ success: true, msg: `Hello, ${name}! You are logged in.` })
})

app.delete('/logoff', (req, res) => {
  res.clearCookie('name')
  res.status(200).json({ success: true, msg: 'You are logged off.' })
})

app.get('/test', auth, (req, res) => {
  res.status(200).json({ success: true, msg: `Welcome back, ${req.user}!` })
})


app.listen(3000, () => {
    console.log('server is listening on port 3000....')
})