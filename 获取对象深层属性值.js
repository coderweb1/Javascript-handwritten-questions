const data = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
  },
}

// fu1(data,a/b/c)

const fn1 = (data, attr) => eval(`data['${attr.split("/").join(`']['`)}']`)

// const fn = (data, attr) =>:

console.log("a/b/c".split("/").reduce((pre, cur) => pre[cur], data))
console.log(fn1(data, "a/b/c"))
