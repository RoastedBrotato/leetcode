/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise(function(resolve, reject){
        let count = 0;
        let res = new Array(functions.length);

        for(let i = 0; i < functions.length; i++){
            let fn = functions[i];
            fn().then(function(val){
                count += 1;
                res[i] = val;
                if(count === functions.length) resolve(res);
            })
            .catch(function(err) {
                reject(err)
            });
        }
    });
};
