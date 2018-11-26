
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator= null;
		this.num1= num1;
		this.num2=num2;
	}
	loadOperator(operator){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true

		//or return false if not the right operator

	}
	loadNumber(num1,num2){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(num1,num2,operator){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
		var add = num1+num2
        var sub = num1-num2
    	var times = num1*num2
        var div = num1/num2
        var result;
    
        if (operator === "+"){
            result = add;
        }
        else if(operator === "-"){
            result = sub;
        }
        else if(operator === "*"){
            result = times;
        }
        else if(operator === "/" ){
            result = div;
        }
            return result
        }
        calculate(5,2,'*')
	
}