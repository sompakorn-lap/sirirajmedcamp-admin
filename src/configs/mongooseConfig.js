const mongoose = require('mongoose')

async function mongooseConfig() {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('connecting database successful')
  }
  catch (err) { console.log(err) }
}

module.exports = {
  mongooseConfig
}