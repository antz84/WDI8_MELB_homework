function calcCircleProperties(radius); {
	var radius = 3;
	var circumference = Math.PI * 2 * radius;
	console.log("The circumference is " + circumference);
	var area = Math.PI * radius * radius;
	console.log("The area is " + area);
}

calcCircleProperties(3);