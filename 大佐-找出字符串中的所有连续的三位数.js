const input = "hello123456world9876"
// const output = ["123", "234", "345", "456", "987", "876"]

;[.../(?=(\d{3}))/g[Symbol.matchAll](input)].map(([, num]) => num)
;("")
console.log([.../(?=(\d{3}))/g[Symbol.matchAll](input)].map(([, num]) => num))
