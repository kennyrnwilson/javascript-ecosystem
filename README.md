# Java Script Eco System
The goal of this document is to teach the reader about JavaScript and its ecosystem. I deliberately use the vague term ecosystem to prevent me having to precisely define the kinds of tools and techniques I am going to cover. While I might touch on some language features, my goal is not to teach the reader how to program in JavaScript. Rather, I intend to cover topic such as the following.

 * Where and how to execute JavaScript
 * How to debug JavaScript
 * How to use TypeScript to prevent common programming errors
 * JavaScript modules
 * Developer tools

Each topic will be covered in a rather superficial manner. My goal is to show the user how to get a bare bones setup running and then, where appropriate, provide links to the relevant resources where the user can find more depth. My target audience is professional developers who want to start using JavaScript. At present this document consists of the following section


* [Introducing Node and NPM](./code/javascript/introducing-node-and-npm/introducing-node-and-npm.md) Introduce basic client/server project using Node.js in JavaScript
* [JavaScript Modules](./code/javascript/javascript-module-formats/javascript-modules.md) duces the two main JavaScript module formats. 
* [Adding Modules to Basic Client](./code/javascript/adding-modules-to-client-server/adding-modules-to-client-server.md.md)
* [Basic Debugging of JavaScript Client/Server in VS Code](./code/javascript/basic-javascript-debugging/README.MD)
* [Using Webback to support hot reloading client](./code/javascript/webpack-and-hot-reloading-front-end/README.MD)


For details on the tools used in this document [See](./tools/README.MD)


## To Be Sorted Out

## Basic JavaScript Development
### Basic Client Server
I will use a very simple client server example to help illustrate the various tools and techniques. [See](./code/basic-client-server/README.MD) for an introduction to the client server code and instructions on how to run it.

### Basic JavaScript Debugging
[This section](./code/basic-javascript-debugging/README.MD) show how to use Visual Studio code to perform simple debugging of both the server and the front end application.

### JavaScript Modules
In this section I introduce JavaScript modules and show the basic usages of the modern ecma script module format. I also very briefly cover the old CommonJS modules.[here](./code/javascript-module-formats/README.MD)

### Adding Modules to the Basic Client Server example
I now extend the simple client server example by adding JavaScript modules. [See](./code/basic-client-server-and-modules/README.MD)

### Nodemon File Watching and Hot Restart (Includes Debugging)
In [this section](./code/filewatching-for-hot-reloading-server/README.MD) I show how to use Nodemon to perform hot restart and hot restart debugging

### Webpack - Bundling and Client side hot reload
In [this section](./code/webpack-and-hot-reloading-front-end/README.MD) we show how to use webpack to enable hot reload of client side code. 


## References 
|Resource|
:--|
[Node.js](https://nodejs.org/en)
|[Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)|