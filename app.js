const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})