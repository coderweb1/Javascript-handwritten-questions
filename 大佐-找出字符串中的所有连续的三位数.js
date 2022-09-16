// const input = "hello123456";
const input = "hello123456world9876";
// const output = ["123", "234", "345", "456", "987", "876"]
// const reg = /(?=(\d{3}))/g;
const reg = /(?=(\d{3}))/g;
// reg[Symbol.match](input);
// reg[Symbol.match](input);
// console.log(reg.exec(input));
// console.log(reg.lastIndex);
// console.log(reg.exec(input));
// // input.match(reg);
// // input.match(reg);
console.log(reg.lastIndex);
// console.log(/?=(\d{3})/g[Symbol.match](input));

// // [.../(?=(\d{3}))/g[Symbol.matchAll](input)].map(([, num]) => num);

console.log([.../(?=(\d{3}))/g[Symbol.matchAll](input)]);
// 456world9876";
