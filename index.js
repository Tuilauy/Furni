const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('assets'))

app.get('/', (req, res) => {
  console.log("Ok");
    const pathFile = path.join(__dirname,'index.html')
    res.sendFile(pathFile)
})

app.get('/shop', (req, res) => {
    const pathFile = path.join(__dirname,'shop.html')
    res.sendFile(pathFile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})