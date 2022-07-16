// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}

// @desc    Set Goals
// @route   POST /api/goals
//@access   Private
const setGoal = (req,res) => {
    res.status9200).json({message: 'Set Goal'})
}

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req,res) => {
    res.status(200).jsom({message: 'Delete Goal ${req.params.id}'})
}
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
