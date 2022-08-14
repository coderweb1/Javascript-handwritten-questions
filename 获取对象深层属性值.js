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

console.log(fn1(data, "a/b/c"))
