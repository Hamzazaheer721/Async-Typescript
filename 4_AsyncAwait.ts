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

// keyword await makes the function wait for a promise
// await can be used inside of async function

const asyncFunc = async () => {
  const promise = new Promise((resolve, reject) => {
    reject("I am rejecting it on purpose")
  })
  const response = await promise
    .then((_val) => console.log("Resolve : ", _val))
    .catch((_err) => console.log("Rejected :", _err))
}

asyncFunc()
