// Import the exported symbols using the same names as exported
import myModule2, {divider as divider2} from './Es6mod.js';

// Use the functions inside the myModule object using dot notation
console.log(myModule2.add(10,20));

// Use the divider function
console.log(divider2(20,2));
