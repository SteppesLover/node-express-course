let {people } = require('../data')

const getPeople = (req, res) =>{
    res.status(200).json({success:true, data:people})
}

const addPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a name',
    })
  }

  const newPerson = { id: people.length + 1, name }
  people.push(newPerson)

  res.status(201).json({
    success: true,
    person: newPerson,
  })
}

const addPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide a name' })
  }
  const newPerson = { id: people.length + 1, name }
  people.push(newPerson)
  res.status(201).json({ success: true, data: people })
}

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id)
  const person = people.find(p => p.id === id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` })
  }
  res.status(200).json({ success: true, data: person })
}

const updatePerson = (req, res) => {
  const id = parseInt(req.params.id)
  const { name } = req.body
  const person = people.find(p => p.id === id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` })
  }
  person.name = name
  res.status(200).json({ success: true, updated: person })
}

const deletePerson = (req, res) => {
  const id = parseInt(req.params.id)
  const person = people.find(p => p.id === id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` })
  }
  people = people.filter(p => p.id !== id)
  res.status(200).json({ success: true, msg: `Person ${id} deleted`, data: people })
}

module.exports = {
  getPeople,
  addPerson,
  addPersonPostman,
  getPersonById,
  updatePerson,
  deletePerson,
}