// const obj = { "a.b.c": 10, "a.d": 2 };

// // 转化
// const output = {
// 	a: {
// 		b: {
// 			c: "1",
// 		},
// 		d: "2",
// 	},
// };
// let newobj = {};
// // obj.key();

// for (key in obj) {
// 	console.log(key.split("."), "1");
// 	console.log(obj.a);
// }

function clone(obj) {
	var response = {};
	for (let key in obj) {
		console.log(key);
		if (key.includes(".")) {
			console.log(key.slice(0, key.indexOf(".")), "111111111");

			console.log(
				[key.slice(key.indexOf(".") + 1)],
				"222222222",
				obj[key],
				"333333333"
			);
			response[key.slice(0, key.indexOf("."))] = clone({
				[key.slice(key.indexOf(".") + 1)]: obj[key],
			});
		} else {
			response[key] = obj[key];
		}
	}
	return response;
}
var obj = {
	"a.b.c": 1,
	d: 2,
};
var r = clone(obj);
console.log(r);

//
console.log();
// s
