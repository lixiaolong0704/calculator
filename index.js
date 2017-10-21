var input = "5+2*3+(12 % 7) * (3 + 222)+23+5*23";


5

2*3+(12 % 7) * (3 + 222)+23+5*23

2*3

(12 % 7) * (3 + 222)+23+5*23


// var {type:"",value:""}

var checks = {
    number(v) {

    },
    operator(v) {
        // return

    }


}

var isOperator = function (c) {
        return /[+\-*\/\^%=(),]/.test(c);
    },
    isDigit = function (c) {
        return /[0-9]/.test(c);
    },
    isWhiteSpace = function (c) {
        return /\s/.test(c);
    };


var lexer = function (input) {

    var output = [], preNumber = "";
    for (var i = 0; i < input.length; i++) {
        // console.log(input[i]);
        var c = input[i];
        if (isOperator(c)) {

            if (preNumber) {
                output.push({type: "number", value: preNumber});
                preNumber="";
            }
            output.push({type: "operator", value: c});
        } else if (isWhiteSpace(c)) {
            if (preNumber) {
                output.push({type: "number", value: preNumber});
                preNumber="";
            }
            // output.push({type: "operator", value: c});
        } else if (isDigit(c)) {
            preNumber += c;

        }

    }

    return output;
}

var parse=function(tokens){


}

var tokens = lexer(input);
console.log(tokens);
var parseTree = parse(tokens);
console.log(parseTree);


