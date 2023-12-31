const router = require('express').Router()
const MedicalExamController = require('../controllers/MedicalExamController')

router.route('/')
  .get(MedicalExamController.getAnswer)
  .patch(MedicalExamController.scoreAnswer)

router.route('/:questionId')
  .get(MedicalExamController.viewQuestion)

module.exports = router