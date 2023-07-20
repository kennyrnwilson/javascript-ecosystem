// Export an object with two symbols in it as the default symbol from this module
var myModule = {
    add: function(x,y) { return x+y},
    sub: function(x,y) { return x-y}
}
export default myModule;

// Export anothe named symbol
export function divider(x,y) 
{
    return x / y;
}

