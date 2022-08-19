function squareDigits(num){
   return parseInt(num.toString().split("").map(num => Math.pow(num,2).toString()).join(""))
}

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
