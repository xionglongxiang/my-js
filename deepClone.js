const isObj = val => typeof val === 'object' && val !== null

function deepClone (obj) {
  let res = obj instanceof Array ? [] : {}

  for (let key in obj) {
    res[key] = isObj(obj[key]) ? deepClone(obj[key]) : obj[key]
  }
  return res
}

obj1 = [1, 2, 3, { b: 2, c: 3 }]
obj2 = { a: 2, b: 2, c: [1, 2, 3], d: null }

console.log(deepClone(obj1))
console.log(deepClone(obj2))
