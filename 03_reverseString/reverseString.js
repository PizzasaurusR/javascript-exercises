const reverseString = function(str) {
    let outputStr = '';
    for (i=0; i<= (str.length); i++){
        outputStr += str.substr(str.length-i,1)
    }
    return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
