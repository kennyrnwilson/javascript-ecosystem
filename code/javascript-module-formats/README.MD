# JavaScript Modules 
There are two main module formats used in JavaScript development.

 * [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)
 * [ECMAScript](https://nodejs.org/api/esm.html#modules-ecmascript-modules)

 ECMAScript is the modern standard, however out of the box Node.js uses CommonJS and a lot of existing documentation on the web uses this syntax so it is still important to know about it. Also [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) for more information. Now we cover each format in turn.

 ## CommonJS (ES5) Module
 The folder [common-js](./common-js/) holds a simple example that uses common-js modules. To run the sample enter the folder and type the following into the terminal.

 ```
 node app.js
 ```

 I will leave it at that for ES5 modules. Most of the sections and documents that follow use ES6. This is especially true when we use TypeScript which uses ES6 modules, but which can be told to compile into JavaScript that actually uses ES5 at runtime. 

 ## ECMAScript (ES6) Modules
The folder [ecma-script](./ecma-script/) contains examples discussed below. 

ES6 modules, also known as ESM, are file based. One file contains one module. We do not
have to explicitly use strict mode with ES6 modules because they are automatically strict
mode. Unlike older module formats ES6 modules do not require instantiation. Instead, we
just import a modules exported symbols. ES6 modules are effectively singletons in that there is only ever one instance created.

If we only use ES6 modules each module imports references from other ES6 modules it
needs, thereby minimising any interaction with the global scope which is a huge advantage. We now look at some ways that an ES6 module exports symbol and how client files consumer those symbols. 

**Note:** that to run ES6 modules using node we need to
add "type":"module", to the package.json at the top level

``` json
{
  "type":"module",
  "name": "es6-modules",
```
## Module.js
The file [Es6mod.js](../examples/es6-modules/es6mod.js) shows that we can export one default symbol and multiple named symbols from a module. We export an object as the default symbol as follows

**Export default Symbol**
```js
var myModule = {
    add: function(x,y) { return x+y},
    sub: function(x,y) { return x-y}
}
export default myModule;
```

We export a named symbol as follows

**Export named Symbol**
```js
export function divider(x,y) 
{
    return x / y;
}
```
Now let us take a look at a simple consumer of our module [ModuleConsumer.js](../examples/es6-modules/ModuleConsumer.js)]. The first line exports the default symbol and named symbols using the same names as the exported symbols 

**Import symbols using same names as exported**
``` js
import myModule, {divider} from './Es6mod.js';
```

We then use the default symbol object using the dot notation and the named function as is
```js
console.log(myModule.add(10,20));
console.log(divider(20,2));
```

We can also use deconstruction to get the parts of the default object exported [ModuleConsumer2.js](../examples/es6-modules/ModuleConsumer2.js)]

```js
import myModule, {divider} from './Es6mod.js';

const {add, sub} = myModule;

console.log(add(10,20));
console.log(sub(10,20));
```

Finally we can rename the exported symbols [ModuleConsumer3.js](../examples/es6-modules/ModuleConsumer3.js)]

``` js
import myModule2, {divider as divider2} from './Es6mod.js';

console.log(myModule2.add(10,20));

console.log(divider2(20,2));

```


