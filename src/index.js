function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.replace(/\s+/g, '');
    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "/":
                if (num === 0) { throw new Error('TypeError: Division by zero.');}
                expr = expr / num;
                break; 
            case "*":
                expr = expr * num;
                break;
            case "-":
                expr = expr - num;
                break;
        }
    }
    return expr;
}

module.exports = {
    expressionCalculator
}