describe('bddApp Services', function(){
	beforeEach(angular.mock.module('bddApp'));
	var calculatorService;
	beforeEach(inject(function($injector) {
		calculatorService = $injector.get('calculatorService');
	}));
	it('should add two positive numbers', inject(function() {
		var operand1 = 1;
		var operand2 = 1;
		var result = 2;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
});