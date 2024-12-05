function pow(base, exponent) {
	let result = base;
	let isExponentPositive = exponent > 0;
	if (exponent === 0) return 1;

	if (!isExponentPositive) exponent *= -1;

		for (let i = 1; i < exponent; i++) {
			result *= base;
		}

		return isExponentPositive? result : 1/result;
	}

console.log(pow(10, 0));
console.log(pow(10, 3));
console.log(pow(10, -1));