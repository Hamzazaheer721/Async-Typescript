// a callback is a function that is passed as an arguement to another function
// A callback function runs after another function has finished
// a techhnique which allows function to call another function

const displayer = (_val: number): void => {
  console.log("Following value is passed in here :", _val)
}

let calculation = (a: number, b: number): void => {
  const c: number = a + b
  displayer(c)
}

calculation(3, 4) // Following value is passed in here : 7

// the problem with above problem is that you wont be able to prevent from displaying the result
// same problem with callback now

const _calculation = (
  a: number,
  b: number,
  func: (_a: number) => void
): void => {
  const c: number = a + b
  func(c)
}

_calculation(3, 5, displayer) // Following value is passed in here : 7
