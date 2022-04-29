const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('anh sim ranh toi khong, lam cho xong sóc kẹt!')
})

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})