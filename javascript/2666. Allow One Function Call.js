/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
    var called = false;
    var result;

	return function(...args){
        if(!called){
            result = fn(...args);
            called = true;
            return result; 
        }
        else{
            return undefined;
        }
    }
};
