const express = require('express')
const router = express.Router()
const {getGoals, setGoals} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "menambahkan method put"
    })    
})

module.exports = router