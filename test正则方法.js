let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/g;

console.log(reg.test(str));

console.log(RegExp.$1, RegExp.$2);
