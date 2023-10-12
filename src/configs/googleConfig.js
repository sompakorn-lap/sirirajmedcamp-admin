const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
  keyFile: `${__dirname}/../../cred.json`,
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.readonly'
  ]
})

const drive = google.drive({ version: 'v3', auth: auth })

module.exports = { drive }