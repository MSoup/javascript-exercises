const sumAll = function(start, end) {
    if (typeof start !== "number" | typeof end !== "number" | start < 0 | end < 0) {
        return "ERROR"
    }
    const lower = Math.min(start, end)
    const higher = Math.max(start, end)

    let ans = 0;
    for (let i = lower; i <= higher; i++) {
        ans += i;
    }
    return ans;
}

module.exports = sumAll

