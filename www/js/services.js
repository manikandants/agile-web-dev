bddApp.service('calculatorService', function(){
  var add = function(operand1, operand2) {
    return operand1 + operand2;
  };
  return {
    add: add
  };
});