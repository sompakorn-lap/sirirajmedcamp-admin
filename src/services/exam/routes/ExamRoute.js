const router = require('express').Router()
const ExamTable = require('../assets/ExanTable.json')

router.use('/medical', require('./MedicalExamRoute'))
router.use('/creative', require('./CreativeExamRoute'))

router.get('/', (req, res) => {
    res.json(ExamTable)
})

module.exports = router