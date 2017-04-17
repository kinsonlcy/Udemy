//take an array as an argument and prints out the elements in the array in reverse order, 
//but dont reverse the array itself
function printReverse(arrayList){
	for(var i = arrayList.length-1 ; i >=0 ; i--){
		console.log(arrayList[i]);
	};
}
//take an array as an argument and returns true if all elements in the array are identical
function isUniform(arrayList){
	var firstElement = arrayList[0];

	for(var i = 1 ; i < arrayList.length ; i++){
		
		if(arrayList[i] !== firstElement){
			return false;
		};			
	};

	return true;
}

//accept an array of numbers and returns the sum of all numbers in the array
function sumArray(arrayList){
	var result = 0;
	arrayList.forEach(function(num){
		result += num;
	});
	return result;
}

// accept an array of numbers and returns the max.num in the array
function max(arrayList){
	var result = arrayList[0];
	arrayList.forEach(function(num){
		if(num >= result){
			result = num;
		};
	});
	return result;
}