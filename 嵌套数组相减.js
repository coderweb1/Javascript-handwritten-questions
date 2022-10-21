// [5, [[4, 3], 2, 1]];

// console.log(
// 	eval(
// 		`[5, [[4, 3], 2, 1]]
// 	`
// 			.replace(/\[/g, `(`)
// 			.replace(/,/g, "-")
// 			.replace(/]/g, ")")
// 	)
// );

let z = [5, [[4, 3], 2, 1]];

with (`[5, [[4, 3], 2, 1]]
`
	.replace(/\[/g, `(`)
	.replace(/,/g, "-")
	.replace(/]/g, ")"));

console.log();

let num = [1, [[2, 3], 4], 5];

function calc(arr) {
	return arr.reduce((a, b) => {
		if (Array.isArray(a) && Array.isArray(b)) {
			return calc(a) - calc(b);
		} else if (Array.isArray(a)) {
			return calc(a) - b;
		} else if (Array.isArray(b)) {
			return a - calc(b);
		}
		return a - b;
	});
}

console.log(calc(z));

// const sub = arr =>
// 	arr.reduce((f, b) => {
// 		result =
// 			(Array.isArray(f) && Array.isArray(b) && sub(f) - sub(b)) ||
// 			(Array.isArray(f) && sub(f) - b) ||
// 			(Array.isArray(b) && f - sub(b)) ||
// 			b - f;

// 		return result;
// 	});
