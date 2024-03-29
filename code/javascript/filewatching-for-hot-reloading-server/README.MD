#  File Watching and Hot Reloading Server (Nodemon)

[Nodemon](https://www.npmjs.com/package/nodemon) is a file watcher that can restart processes when files in a directory change. This can be very useful, especially during web development. Before getting started we need to install nodemon

```
npm install --save-dev nodemon
```

And resolve npm dependencies for our server (just express)

```
npm install
```

Rather than run our app using node directly we can instead run it using nodemon.

```
npx nodemon .\src\server\Server.js
```

or

```
.\node_modules\.bin\nodemon .\src\server\Server.js
```

We should see something similar to the following 

```
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node .\src\server\Server.js`
Example app listening on the port given 3000
```

Now if we change and save our Server.js file then nodemon will restart the process for us. So nodemon has given us restart functionality on the server. What if we want reload plus debugging? We can modify our Launch Node target as follows. 

```json
        {
            "name": "Launch Nodemon",   
            "program": "${file}",
            "request": "launch",
            "runtimeExecutable": "nodemon",
            "runtimeArgs": ["--inspect"],
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node" 
        }
```

Note the following changes  

 * runtimeExecutable - tell VS Code to use nodemon rather that basic Node
 * runtimeArgs - pass the --inspect flag to nodemon which will start Node.js with debug server enabled

> **Note:** We need to have the Server.js open and with the focus before runing this target as program is set as ${file}. 


## Debug with Attach and Nodemon
Run the server on the command line as follows

```
nodemon --inspect Server.js
```

Now add the following debug configuration

```js
        {
            "name": "Attach Nodemon",
            "request": "attach",
            "restart": true,
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        } 
```

Now you can attache using the new configuration. Any changeas to file will once again cause the process to restart in the debugger.


## References
|Resource|
|:--|
|[Nodemon](https://www.npmjs.com/package/nodemon)