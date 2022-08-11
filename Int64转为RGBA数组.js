// 将INt64转化为RGBA数组

const input = 0xffffffff

// [R,B,G,A]

// const output=[255,255,255,255]

const output = [
  ...(function* (input) {
    while (input) {
      yield input & 0xff
      input >>>= 8
    }
  })(input),
].reverse()

console.log(output)
