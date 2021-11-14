const myFunction = async (a: number) => {
  if (a < 10)
    return Promise.resolve("Success ! your variable is just perfect small")
  else return Promise.reject("Error! Your varibale is too long")
}

myFunction(2)
  .then((_val) => {
    console.log(_val)
  })
  .catch((_err) => console.log(_err))

// both are same, whether you define error in catch or you define it as
// second function parameter in promise for myFunction

myFunction(41).then(
  (_val) => {
    console.log(_val)
  },
  (_val) => {
    console.log(_val)
  }
)
