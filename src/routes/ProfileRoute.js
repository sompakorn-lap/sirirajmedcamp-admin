const router = require('express').Router()
const ProfileController = require('../controllers/ProfileController')

router.route('/:userId')
  .get(ProfileController.findProfile)
  .patch(ProfileController.updateProfile)

module.exports = router