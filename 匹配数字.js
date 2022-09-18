const str = "zhongguo2020yangfan2021qihang";
let reg = /\d+/g;

const _exec = RegExp.prototype.exec;

// RegExp.prototype.exec = function (string) {
// 	const result = [];

// 	let res = _exec.call(this, string);

// 	while (res) {
// 		result.push(res);
// 		res = _exec.call(this, string);
// 	}
// 	return result;
// };

// console.log(reg.exec(str));

console.log(str.matchAll(reg));

RegExp.prototype.execAll = function (string) {
	const _this = this;
	let res = null;
	this.__proto__[Symbol.iterator] = function* () {
		res = _exec.call(_this, string);
		while (res) {
			yield res;
			res = _exec.call(_this, string);
		}
	};

	return [...this.__proto__];
};

console.log(reg.execAll(str));

// str.match(reg);
// console.log("reg", str.match(reg));
// console.log(Array);

// {
// 	const str = "zhongguo2020yangfan2021qihang";

// 	let reg = /\d/g;

// 	const _exec = RegExp.prototype.exec;

// 	RegExp.prototype.exec = function (string) {
// 		let res = null;
// 		Object.getPrototypeOf(this)[Symbol.iterator] = function* () {
// 			res = _exec.call(this, string);
// 			while (res) {
// 				yield res;
// 				res = _exec.call(this, string);
// 			}
// 		};

// 		return [...this];
// 	};
// 	console.log(reg.exec(str));
// }
