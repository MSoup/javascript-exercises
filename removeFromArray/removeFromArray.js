const removeFromArray = function(arr, ...args) {
    const ans = arr.filter((el) =>
        (args.indexOf(el) == -1)
    );

    return ans;
    
}


module.exports = removeFromArray