var isValid = function (s) {
    let stackBracket = [];
    for (let bracketChar of s.split("")) {
        switch (bracketChar) {
            case "(":
            case "[":
            case "{":
                stackBracket.push(bracketChar);
                break;
            case ")":
                if (stackBracket.length === 0 || stackBracket.pop() != "(") {
                    return false;
                }
                break;
            case "]":
                if (stackBracket.length === 0 || stackBracket.pop() != "[") {
                    return false;
                }
                break;
            case "}":
                if (stackBracket.length === 0 || stackBracket.pop() != "{") {
                    return false;
                }
                break;
        }
    }
    return stackBracket.length === 0;
};