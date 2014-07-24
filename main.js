var chunk = function(arr, num) {
	
	var answerArr = [];
	var sizeChunks = Math.floor(arr.length/num);	
	var remainder = arr.length % num;

	for(var i=0; i < num; i++) {	
		var start = sizeChunks * i + remainder;
		var end = start + sizeChunks;
		// Add in remainder one at a time into the first chunks 
		// till remainder gone.
		if (remainder > 0 && i < remainder) {
			start += i - remainder;
			end = start + sizeChunks + 1;
		}
		answerArr[i] = arr.slice(start,end)
		}
	return answerArr;
}