const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { corsConfig } = require('./src/configs/corsConfig')
const { mongooseConfig } = require('./src/configs/mongooseConfig')

const app = express()
app.use(express.json({ limit: '3mb' }))
app.use(cors(corsConfig))
app.use(express.static('dist'))

mongooseConfig()

app.use('/api', require('./src/routes/ApiRoute'))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`running on port:${port}`) })