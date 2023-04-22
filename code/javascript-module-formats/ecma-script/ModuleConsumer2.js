// Import the exported symbols using the same names as exported
import myModule, {divider} from './Es6mod.js';

// Take symbols out by destructuring
const {add, sub} = myModule;

// Use the functions inside the myModule object using dot notation
console.log(add(10,20));
console.log(sub(10,20));

// Use the divider function
console.log(divider(20,2));
