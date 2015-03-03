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
	it('should add a positive number and a negative number', inject(function() {
		var operand1 = -1;
		var operand2 = 1;
		var result = 0;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
	it('should add two negative numbers', inject(function() {
		var operand1 = -1;
		var operand2 = -10;
		var result = -11;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
	it('should add Decimal Strings', inject(function() {
		var operand1 = '100';
		var operand2 = '123';
		var result = 223;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
	it('should return zero if two Strings are added', inject(function() {
		var operand1 = "mani";
		var operand2 = "kandan";
		var result = 0;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
	it('should return zero if a string and number are added', inject(function() {
		var operand1 = "mani";
		var operand2 = -10;
		var result = 0;
		expect((calculatorService.add(operand1, operand2))).toBe(result);
	}));
});