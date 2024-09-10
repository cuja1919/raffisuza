const getGoals = (req,res) => {
    res.status(200).json({
        message : "Get Goals"
    })
}
const setGoals = (req,res) => {
    res.status(200).json({
        message : "Set Goals",
        data: req.body
    })
}

module.exports = {getGoals, setGoals}

const updateGoal =(req, res) => {
res.status (200).json({
    massage: `updateGoal ${req.params}`
})
}

const deletegoal = (req, res) => {
    res.status (200).json({
        massage: `delete goal ${req.params.id}`
    }) 
}

module.exports = { getGoals, setGoals, updateGoal, deletegoal,}
