import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

require('dotenv').config({ path: '.env' })

const PORT = 3004 || process.env.PORT

const comicRouter = require('./routes/comics-routes')
const characterRouter = require('./routes/character-routes')
const eventsRouter = require('./routes/events-routes')

const app = express()
const bodyParserJSON = bodyParser.json()
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true })

app.use(cors())
app.use(express.json())
app.use(bodyParserJSON)
app.use(bodyParserURLEncoded)

app.use('/comics', comicRouter)
app.use('/characters', characterRouter)
app.use('/events', eventsRouter)

app.listen(PORT, () => {
  console.log(`the server is running on port: ${PORT}`)
})