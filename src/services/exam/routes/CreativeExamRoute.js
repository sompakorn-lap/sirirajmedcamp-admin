const router = require('express').Router()
const CreativeExamController = require('../controllers/CreativeExamController')

router.route('/')
  .get(CreativeExamController.getAnswer)
  .patch(CreativeExamController.scoreAnswer)

module.exports = router