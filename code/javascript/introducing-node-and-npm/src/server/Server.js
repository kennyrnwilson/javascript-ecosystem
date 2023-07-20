const express = require('express');
const app = express();
const port = 3000;

// Log all incoming request to the console
const logRequest= (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
}
app.use(logRequest);

// Setup static file serving from app directory. Use Index.html as root page
app.use(express.static('public', {index: "Index.html"}), );

// Setup static file serving from app/src for the JavaScript files.
app.use(express.static('src/client'));

// Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});