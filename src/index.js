module.exports = function longestConsecutiveLength(array) {
	var longest = 0;
	var current = 1;

	array.sort(function(a, b) {
		return a - b;
	});

	if(array.length == 0) return 0;
    if(array.length == 1) return 1;

	for(var i = 1; i< array.length; i++){

		if(array[i] != array[i-1]){
			if(array[i] == array[i-1]+1) current++;
			else { 
				if(longest < current) longest = current;
				current = 1;   
			}
		}
	}
	return longest;
}
