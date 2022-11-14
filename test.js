Function.prototype.My = function (context) {
  const args = [...arguments[1]]
  context = Object(context)

  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

function print (num) {
  console.log([...arguments])
  console.log((this.a = "person's a " + num))
  console.log((this.b = "person's b " + num))
  console.log((this.c = "person's c " + num))
}

const person = {
  a: "person's a",
  b: "person's b",
  c: "person's c"
}

print.MyApply(person, [3, 4, 5])
console.log(person)
