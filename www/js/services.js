bddApp.service('calculatorService', function(){
  var add = function(operand1, operand2) {
	if((operand1 !== undefined)&&(operand2 !== undefined)){
		if(parseFloat(operand1) && parseFloat(operand2)){
			return parseFloat(operand1) + parseFloat(operand2);
		}else{
			return 0;
		}
	}else{
		return 0;
	}
  };
  return {
    add: add
  };
});