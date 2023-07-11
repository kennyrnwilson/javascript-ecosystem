import express, { Express, Request, Response} from 'express';

const app:Express = express();
const port = 3000;

// // Log all incoming request to the console
const logRequest= (req:Request, res:Response, next: () => void) => {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
}
app.use(logRequest);

// // Setup static file serving from app directory. Use Index.html as root page
 app.use(express.static('app', {index: "index.html"}), );
 app.use(express.static('dist/client-app'));
 app.use(express.static('src'));

// // Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Hello TypeScript");