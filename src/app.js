import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import https from 'https'
import path from 'path'

import dotenv from 'dotenv';
dotenv.config({ path: path.resolve('./app.env')});

import { WheatherRoute } from './routes'

const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use('/api', WheatherRoute)

if(process.env.NODE_ENV) {
  var certOptions = {
    key: fs.readFileSync(path.resolve('./cert/key.pem')),
    cert: fs.readFileSync(path.resolve('./cert/cert.pem'))
  }

  https.createServer(certOptions, app).listen(443)
  console.log(`API running in port 443`)
} else {
  app.server = app.listen(PORT, () => {
    console.log(`API running in port ${PORT}`)
  })
}

module.export = app;
