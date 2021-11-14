// I promise a result
// Producing code is a code that can take some time
// Consuming code is a code that must wait for the result
// A Promise a javascript that links the producing and consuming code

const myPromiseFunction = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hey guys, Welcome to JS World"), 1000)
  setTimeout(() => reject("Hey guys, I'm throwing error"), 1000)
})

myPromiseFunction.then(
  (_val) => {
    console.log("this is success", _val)
  },
  (__val) => {
    console.log("this is error", __val)
  }
)

//if resolve is execueted then, we will get the success function executing first in then
// otherwise error function will be executed
