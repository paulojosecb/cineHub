const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./Database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static('public'))

app.listen(process.env.PORT || 3000)
