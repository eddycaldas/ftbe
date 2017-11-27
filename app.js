const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = {
  kid: require('./routes/kid'),
  parent: require('./routes/parent')
}

app.use('/kid', routes.kid)
app.use('/parent', routes.parent)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))