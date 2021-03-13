module.exports = function toReadable(number) {

  let numbersDict = [{
    0: 'zero', 1: 'one',
    2: 'two', 3: 'three',
    4: 'four', 5: 'five',
    6: 'six', 7: 'seven',
    8: 'eight', 9: 'nine',
    10: 'ten'
  }, {
    1: 'eleven', 2: 'twelve',
    3: 'thirteen', 4: 'fourteen',
    5: 'fifteen', 6: 'sixteen',
    7: 'seventeen', 8: 'eighteen',
    9: 'nineteen', 0: 'twenty',
  }, {
    1: 'ten', 2: 'twenty',
    3: 'thirty', 4: 'forty',
    5: 'fifty', 6: 'sixty',
    7: 'seventy', 8: 'eighty',
    9: 'ninety',
  }]

  let splitNumber = String(number).split("")

  if (number >= 0 && number <= 10) {
    return numbersDict[0][number];
  }
  if (number > 10 && number < 21) {
    return numbersDict[1][splitNumber[1]];
  }
  if (number > 20 && number < 100){
    if (splitNumber[1] == "0"){
      return numbersDict[2][splitNumber[0]];
    } else {
      return numbersDict[2][splitNumber[0]] + " " + numbersDict[0][splitNumber[1]];
    }
  }
  if (number > 99 && number < 1000) {
    if (splitNumber[1] == "0" && splitNumber[2] == "0")
      return numbersDict[0][splitNumber[0]] + " hundred";
    if (splitNumber[1] == "0")
      return numbersDict[0][splitNumber[0]] + " hundred " + numbersDict[0][splitNumber[2]];
    if (splitNumber[1] == "1" && splitNumber[2] == 0)
      return numbersDict[0][splitNumber[0]] + " hundred ten";
    if (splitNumber[1] == "1")
      return numbersDict[0][splitNumber[0]] + " hundred " + numbersDict[1][splitNumber[2]]
    if (splitNumber[2] == "0")
      return numbersDict[0][splitNumber[0]] + " hundred " + numbersDict[2][splitNumber[1]];
    else
      return numbersDict[0][splitNumber[0]] + " hundred " + numbersDict[2][splitNumber[1]] + " " + numbersDict[0][splitNumber[2]];
  }
}