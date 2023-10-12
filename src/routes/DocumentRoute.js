const router = require('express').Router()
const DocumentController = require('../controllers/DocumentController')

router.route('/:userId')
  .post(DocumentController.createDocument)
  .get(DocumentController.findDocument)

module.exports = router