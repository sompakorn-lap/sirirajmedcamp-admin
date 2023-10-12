const router = require('express').Router()
const CreativeExamController = require('../controllers/CreativeExamController')

router.route('/')
  .get(CreativeExamController.getAnswer)
  .patch(CreativeExamController.scoreAnswer)

router.route('/:questionId')
  .get(CreativeExamController.viewQuestion)

module.exports = router