function calculateSupply(currentAge, numPerDay) {
	var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - currentAge);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
   console.log(message);
}

calculateSupply(26, 36);
