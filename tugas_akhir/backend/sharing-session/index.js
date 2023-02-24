const express = require('express')
const app = express()
const port = 3000
const routenav = require('./router/routeNavigation')

app.get('/greeting', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/', routenav)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

