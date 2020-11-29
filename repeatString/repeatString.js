const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }
    let ans = "";
    for (let i = 0; i < num; i++) {
        ans += word;
    }
    return ans;
}

module.exports = repeatString
