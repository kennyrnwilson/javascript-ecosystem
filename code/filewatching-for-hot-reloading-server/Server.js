const express = require('express')
const app = express()
const port = 3000

// Log all incoming request to the console
const logRequest= (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  console.log("Another3");
  next()
}
app.use(logRequest)

// Setup static file serving from app directory. Use Index.html as root page
app.use(express.static('app', {index: "Index.html"}), )

// Start listening
app.listen(port, () => {
  console.log(`Example app listening on the port given ${port}`)
})