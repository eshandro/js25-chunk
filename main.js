var chunk = function(arr, num) {

	var spliceAmount = 0;
	var startSplice = 0;
	
	var arrChunk = [];
	var answerArr = [];
	// Following works for arr that can be evenly divided by num
	console.log(arr.length % num);
	if (arr.length % num === 0) {
		spliceAmount = arr.length/num;
		for(var i=0; i <= num; i++) {
			if (arr.length >= spliceAmount) {
				arrChunk = arr.splice(startSplice, spliceAmount);
				answerArr.push(arrChunk);
				arrChunk = [];
			}
		}		
		console.log(answerArr[0]);
		return answerArr;
	}
	else {
		var amountInChunks = arr.length/num;	
		var roundedAmountInChunks = Math.round(amountInChunks);

		if (Math.max(amountInChunks, roundedAmountInChunks) === amountInChunks) {
			spliceAmount = roundedAmountInChunks + 1;
		}
		else {
			spliceAmount = roundedAmountInChunks;
		}

		var chunksLeft = num;

	// var numberOfFullChunks = Math.round(num/spliceAmount);

	for(var i=0; i <= num; i++) {
		if (arr.length >= spliceAmount) {
			arrChunk = arr.splice(startSplice, spliceAmount);
			answerArr.push(arrChunk);
			arrChunk = [];
		}
	}

	return answerArr;
}

var input = [1,2,3,4,5,6,7,8,9,10];
var input2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

$(document).on('ready', function() {
  
});