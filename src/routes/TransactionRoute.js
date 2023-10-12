const router = require('express').Router()
const TransactionController = require('../controllers/TransactionController')

router.route('/:userId')
  .post(TransactionController.createTransaction)
  .get(TransactionController.findTransaction)

module.exports = router