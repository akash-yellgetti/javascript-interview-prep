var isValidParentheses = function(s) {
    const brackets = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    
    const stack = [];
    for(let i in s) {
        const symbol = s[i];
        console.log(symbol, brackets[symbol])
        if(brackets[symbol]) {
            stack.push(brackets[symbol])
        } else if(!brackets[symbol] && stack[stack.length-1] === symbol) {
            stack.pop(symbol);
        } else {
            return false;
        }
        
    }

    return stack.length === 0 ? true : false;
};

console.log(isValidParentheses('[({)]'));