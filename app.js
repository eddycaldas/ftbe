const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const routes = {
  kid: require('./routes/kid')
}

app.use('/kid', routes.kid)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))