const sumAll = function(firstNum, secondNum) {
    
    if (firstNum > secondNum){
    const temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
    }

    if (firstNum < 0 || secondNum < 0) return 'ERROR';
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return 'ERROR';
   let sum = 0;
   for (let i = firstNum; i <= secondNum; i++) {
    sum += i;
   }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
