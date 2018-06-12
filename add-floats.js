function addFloats(x, y) {
	//this function is to help solve the floating point precision problem (e.g. 0.1 + 0.2)
	//written this way to be readable and to show how it works
	//this is possibly an original solution
	var total= 0;
	//convert the floats to strings
	var xTxt = String(x).replace(/,/g, '');
	var yTxt = String(y).replace(/,/g, '');
	//store the decimal positions of each individual float
	var xDecimalIndex = xTxt.indexOf(".");
	var yDecimalIndex = yTxt.indexOf(".");
	if (xTxt.indexOf(".") < 0) {
		xDecimalIndex = xTxt.length;
	}
	if (yTxt.indexOf(".") < 0) {
		yDecimalIndex = yTxt.length;
	}
	//store the decimal precision or scale of the floats
	var xDecimalPlaces = xTxt.length - xDecimalIndex - 1;
	var yDecimalPlaces = yTxt.length - yDecimalIndex - 1;
	if (xDecimalPlaces < 0) {
		xDecimalPlaces = 0;
	}
	if (yDecimalPlaces < 0) {
		yDecimalPlaces = 0;
	}
	var decimalPlaces = 0;
	var decimalIndex = 0;
	var decimalDifference;
	//store the decimal position with the highest value
	//match the length of the strings by adding zeros to the ends of the shorter string using the difference
	if (xDecimalPlaces > yDecimalPlaces) {
		decimalPlaces = xDecimalPlaces;
		decimalDifference = xDecimalPlaces - yDecimalPlaces;
		for (i = 0; i < decimalDifference; i++) {
			yTxt = yTxt + "0";
		}
	} else {
		decimalPlaces = yDecimalPlaces;
		decimalDifference = yDecimalPlaces - xDecimalPlaces;
		for (i = 0; i < decimalDifference; i++) {
			xTxt = xTxt + "0";
		}
	}
	//remove the decimals points
	xTxt = xTxt.replace(".", ""); 
	yTxt = yTxt.replace(".", "");
	//parse the strings into floats(or integers) and add them up
	total = parseFloat(xTxt) + parseFloat(yTxt);
	//convert the number into a string
	total = String(total);
	decimalIndex = total.length - decimalPlaces;
	//put back the decimal point in the string
	total = total.substr(0, decimalIndex) + "." + total.substr(decimalIndex);
	return parseFloat(total);
}