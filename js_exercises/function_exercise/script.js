function isEven(number){
	if(number % 2 === 0){
		return true;
	}
	return false;
}

function factorial(number){
	if(number === 0){
		return 1;
	}
	return number * factorial(number - 1 );
}

function kebabToSnake(word){
	var result = word;
	var i = 0;
	if(word.indexOf("-") <0 ){
		return word;
	}
	while(i < word.length){
		if(word[i] === "-"){
			result = result.substr(0,i)+ '_' + result.substr(i+1);
		}
		i++;
	}
	return result;
}