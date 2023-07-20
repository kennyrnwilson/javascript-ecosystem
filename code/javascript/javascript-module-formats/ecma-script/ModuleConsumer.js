// Import the exported symbols using the same names as exported
import myModule, {divider} from './Es6mod.js';

// Use the functions inside the myModule object using dot notation
console.log(myModule.add(10,20));

// Use the divider function
console.log(divider(20,2));
