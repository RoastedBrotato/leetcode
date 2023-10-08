/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    for(let i of this){
        let element = fn(i);
        result[element]?result[element].push(i) : result[element] = [i]
    }
    return result;
};
