const router = require('express').Router()
const FileController = require('../controllers/FileController')

router.route('/:fileId')
  .get(FileController.findFile)

module.exports = router