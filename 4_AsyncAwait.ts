const myFunction = async () => {
  return "hey I am async"
}

myFunction().then((_val) => {
  console.log(_val)
})

// Example # 2
let func = async () => {
  return Promise.resolve("Resolved is being sent")
}

func().then(
  (_success) => {
    console.log(_success)
  },
  (_error) => {
    console.log(_error)
  }
)
