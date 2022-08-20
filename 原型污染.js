Array.prototype.filter = () => "";

console.log("bef");

console.log([1, 2, 3].filter(e => e % 2));

const iframe = document.createElement("iframe");

document.body.append(iframe);

Array.prototype.filter = iframe.contentWindow.Array.prototype.filter;

iframe.remove();
("use strict");
// exports = {};

console.log(this);

// console.log([...10]);
