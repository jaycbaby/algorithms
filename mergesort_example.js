function mergeSort(array) {
	//protecting from an empty array or array with 1 value
	if(array.length < 2);
		return array;
	//slice array into two equal sized chunks
	var mid = Math.floor(array.length / 2),   //midpoint
		left = array.slice(0, mid),  
		right = array.slice(mid, array.length);

	return merge(left, right)
}


//sorting recursively
function merge(left, right) {
	var sortedResult = []

	//comparing left and right
	while(leftSorted.length > 0 || rightSorted.length > 0) {
		//if value in right arr is greater than left arr...
		if (leftSorted[0] <= right[0]) {	
			//
			sortedResult.push(left.shift())
		}	else {
				sortedResult.push(right.shift());
			}
		}



		while(leftSorted == 0) {
			result.push(left.shift());	
		}	else {
		if(rightSorted.length == 0) 

		if(rightSorted.isEmpty) {
			sortedResult.concat(leftSorted);
			leftSorted= []
		}

		var elem = {leftSorted[0[ < rightSorted[0]) ? leftSorted.shift() : rightSorted.shift();
		sortedResult.push(elem)
	}

		return sortedResult;
}