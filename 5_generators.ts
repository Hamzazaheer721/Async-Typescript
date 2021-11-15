const generatorId = function* () {
  let id = 1
  while (true) {
    let increment = yield id
    console.log(increment)
    if (increment != null) id += increment
    id++
  }
}

const iterableObj = generatorId()
console.log(iterableObj.next())
console.log(iterableObj.next(10))
console.log(iterableObj.next())
console.log(iterableObj.next(1))
console.log(iterableObj.next())
