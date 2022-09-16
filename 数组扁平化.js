var arr = [1, 2, 3, 4, [4, 5, [5, 6, 7]]];

// .toString + split
arr.toString()
	.split(",")
	.map((value, index) => Number(value));
