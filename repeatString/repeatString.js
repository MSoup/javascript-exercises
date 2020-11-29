const repeatString = function(word, num) {
    let ans = "";
    for (let i = 0; i < num; i++) {
        ans += word;
    }
    return ans;
}

module.exports = repeatString
