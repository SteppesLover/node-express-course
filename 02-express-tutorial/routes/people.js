const express = require('express');
const router = express.Router();
const {
  getPeople,
  addPerson,
  addPersonPostman,
  getPersonById,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

//router.get('/', getPeople)
//router.post('/', createPerson)
//router.post('/postman', createPersonPostman)
//router.put('/:id', updatePerson)
//router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(addPerson)
router.route('/postman').post(addPersonPostman)
router.route('/:id')
  .get(getPersonById)
  .put(updatePerson)
  .delete(deletePerson)

module.exports = router
