# Java Script Eco System
The goal of this document is to teach the reader about JavaScript and its ecosystem. I deliberately use the vague term ecosystem to prevent me having to precisely define the kinds of tools and techniques I am going to cover. While I might touch on some language features, my goal is not to teach the reader how to program in JavaScript. Rather, I intend to cover topic such as the following.

 * Where and how to execute JavaScript
 * How to debug JavaScript
 * How to use TypeScript to prevent common programming errors
 * JavaScript modules
 * Developer tools

Each topic will be covered in a rather superficial manner. My goal is to show the user how to get a bare bones setup running and then, where appropriate, provide links to the relevant resources where the user can find more depth. My target audience is professional developers who want to start using JavaScript.

## Tools
 [NPM](./tools/node-package-manager.md)

## Execution Environments
JavaScript runs in a JavaScript execution engine. For the purposes of this document we will consider the following two commonly used execution environments 

 * Node.js commonly used for 'server side' JavaScript
 * Chrome browser commonly used for client side JavaScript

<br/>

![Execution](./imgs/ExeEnvs.png)

 To install Node.js see this [Link](https://nodejs.org/en). Most users will want the LTS version. To install Chrome see this [Link](https://www.google.com/intl/en_in/chrome/)

 ## Packages
 There are other package managers but I will focus mostly on Node Package Manager or npm. 

## Running Node.js in REPL
 Once we have installed Node.js we can test it out in REPL mode  (Read Execute Print Loop) by simply typing the following

 ```
 node
 ```

 and then entering some basic command such as follows

 ```
 PS C:\Users\kenne\code\kennyrnwilson\git\javascript-ecosystem> node
 Welcome to Node.js v16.16.0.
Type ".help" for more information.
> console.log("Hello World");
Hello World
undefined
>
 ```

## Chrome dev tools
Open Chrome and then enter Chrome dev tools using the key combination **Ctrl-Shift-I**. Move to the console tab and enter

```
console.log("Hello World");
```

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