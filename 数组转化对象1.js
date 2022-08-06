const arr = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
]
// 转换为： {0: '男', 1:'女'}

console.log(
  arr.reduce((pre, cur) => {
    pre[cur["value"]] = cur["label"]
    return pre
  }, {})
)
