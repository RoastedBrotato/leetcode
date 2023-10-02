/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (x) => {
            if (val !== x) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (y) => {
            if (val === y) throw new Error("Equal");
            else return true;
        }
    }
};
