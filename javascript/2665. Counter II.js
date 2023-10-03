/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let i = 0;
  return {
    increment: () => init + ++i,
    decrement: () => init + --i,
    reset: () => {
      i = 0;
      return init;
    }
  }
};
