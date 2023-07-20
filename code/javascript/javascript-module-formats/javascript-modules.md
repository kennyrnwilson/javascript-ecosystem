# JavaScript Modules 
There are two main module formats used in JavaScript development.

 * [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)
 * [ECMAScript](https://nodejs.org/api/esm.html#modules-ecmascript-modules)

 ECMAScript is the modern standard module format and it has many advantages over CommonJS. Nevertheless, because Node.js uses CommonJS out of the box and because much documentation and example code still uses this format it is important to at least be familiar with it. [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) for more information on the evolution of JavaScript modules. 

 ## CommonJS (ES5) Module
 The folder [common-js](./common-js/) holds a simple example that uses common-js modules. To run the sample enter the folder and type the following into the terminal.

 ```
 node app.js
 ```

 I will leave it at that for CommonJS/ES5 modules. Most of the sections and documents that follow use ES6. 

 ## ECMAScript (ES6) Modules
The folder [ecma-script](./ecma-script/) contains examples discussed below. 

ES6 modules are file based. One file contains one module. We do not have to explicitly use strict mode with ES6 modules because they are automatically strict mode. Unlike older module formats, ES6 modules do not require instantiation. We just import a modules exported symbols. ES6 modules are effectively singletons in that there is only ever one instance created.

If we only use ES6 modules each module imports references from any other ES6 modules it needs, thereby minimising any interaction with the global scope. This is a huge advantage. We now look at some ways that an ES6 module exports symbols and how client files consumer those symbols. 

**Note:** that to run ES6 modules using Node.js we need to
add "type":"module", to the package.json at the top level

``` json
{
  "type":"module",
  "name": "es6-modules",
```

To run the examples enter the following from the workspace folder which is the folder this file is contained in.

```
node .\ecma-script\ModuleConsumer.js
 node .\ecma-script\ModuleConsumer2.js
 node .\ecma-script\ModuleConsumer3.js
```

### Module Definition 
The file [./ecma-script/es6mod.js](./ecma-script/es6mod.js) shows that we can export one default symbol and multiple named symbols from a module. We export an object as the default symbol as follows

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

### Module Consumption (I)
Now let us take a look at a simple consumer of our module [./ecma-script/ModuleConsumer.js](./ecma-script/ModuleConsumer.js). The first line imports the default symbol and the named symbol using the same names as those exported from the es5mod.js.  

**Import symbols using same names as exported**
``` js
import myModule, {divider} from './Es6mod.js';
```

We then use the default symbol object using the dot notation to access the function add. We can directly use the divider symbol. 

```js
console.log(myModule.add(10,20));
console.log(divider(20,2));
```

### Module Consumption (II) - Deconstructors
We can also use deconstruction to get the parts of the default object exported in [./ecma-script/ModuleConsumer2.js](./ecma-script/ModuleConsumer2.js)

```js
import myModule, {divider} from './Es6mod.js';

const {add, sub} = myModule;

console.log(add(10,20));
console.log(sub(10,20));
```

### Module Consumption (III) - Renaming modules
Finally we can rename the exported symbols in [ModuleConsumer3.js](./ecma-script/ModuleConsumer3.js)]

``` js
import myModule2, {divider as divider2} from './Es6mod.js';

console.log(myModule2.add(10,20));

console.log(divider2(20,2));

```

## References 
|Resource|
:--|
[JavaScript Module Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)
[ECMAScript](https://nodejs.org/api/esm.html#modules-ecmascript-modules)



