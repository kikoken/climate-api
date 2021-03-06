import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {
  WheatherRoute
} from './routes'

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.json())
app.use('/api', WheatherRoute)

app.server = app.listen(PORT, () => {
  console.log(`API running in port ${PORT}`)
})

module.export = app;