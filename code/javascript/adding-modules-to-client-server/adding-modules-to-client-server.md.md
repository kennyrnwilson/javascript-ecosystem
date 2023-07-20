# JavaScript Modules

Following on from the [previous section](../javascript-module-formats/README.MD) which introduced JavaScript modules I now use JavaScript modules in the client server application.

## Server.js
The server already uses CommonJS modules to add Express.js 

```
const express = require('express')
```
## Front End App
In this code fragment I have extended the client app to use a module called arithmeric.js Modern browsers support ECMAScript modules so this is the format I have used. Notice how the html add javascript by include the module attribute

```html
    <script defer type="module" src="Main.js"></script>
```