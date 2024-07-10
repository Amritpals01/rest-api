//@description Get goals
//@route GET/api/goals
//@acess Private

const getGoals = (req , res)=>{
    res.status(200).json({message: 'Get goals'})
}

//@description Set goals
//@route POST/api/goals
//@acess Private

const setGoal  = (req , res)=>{
    res.status(200).json({message: 'Set goal'})
}

//@description UPDATE goals
//@route PUT/api/goals/:id
//@acess Private

const updateGoal = (req , res)=>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

//@description DELETE goal
//@route DELETE/api/goals/:id
//@acess Private

const delteGoal = (req , res)=>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}



module.exports = {
    getGoals,
    setGoal,
    delteGoal,
    updateGoal
}