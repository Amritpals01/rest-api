const express = require('express')
const router = express.Router()
const {getGoals,updateGoal,delteGoal, setGoal,}= require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id ').delete(delteGoal).put(updateGoal)

router.put('/:id' , updateGoal)

router.delete('/:id' , delteGoal)


module.exports = router