# JavaScript Modules
JavaScript modules come in two forms

 * CommonJS 
 * ES6 

 ## ES6 Modules 

ES6 modules, also known as ESM, are file based. One file contains one module.We do not have to explicitly use strict mode with ES6 modules because they are automatically strict mode. Unlike older module formats ES6 modules do not require instantiation. Instead, we just import its exported symbols. ES6 modules are effectively singletons in that there is only ever one instance created. If we only use ES6 modules each module imports references from other ES6 modules it needs, thereby minimising any interaction with the global scope which is a huge advantage. 

Browsers support ES6 modules. See our app for an example

[arithmetic.js](./app/modules/arithmetic.js)

```js
var myModule = {
  add: function(x,y) { return x+y},
  sub: function(x,y) { return x-y}
 }

export function divide(x,y) 
 { 
  return x/y
 }

export default myModule;
 
```

**Note:** we export a default symbol as a hash of some functions and then we also export explicitly the divide function to show both forms.


We then use the module from [main.js](./app/main.js)

```js
import a from './modules/arithmetic.js';
var {add,subtract} = a;
import {divide} from './modules/arithmetic.js';

```

 ## CommonJS Modules 

