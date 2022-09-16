let str = "zhongggguojiayouffanrongfuuuuuuuuqiang";

console.log(
	/([a-zA-Z])\1+/g[Symbol.match](str).sort((a, b) => b.length - a.length)
);
