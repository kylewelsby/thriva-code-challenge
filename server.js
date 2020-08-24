const express = require('express')
const path = require('path')
const fallback = require('express-history-api-fallback')
const app = express()

app.use(express.static(path.join(__dirname, './dist')))
app.use(require('connect-history-api-fallback')())
app.use(fallback('index.html', { root: path.join(__dirname, './dist') }))
const port = process.env.PORT || 3030
app.listen(port)

console.log(`Listening on port ${port}`)
