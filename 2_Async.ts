// I will finish it later
// Functions running in parallel with eachother are called async functions

const myFunction = (): void => {
  const date: Date = new Date()
  console.log(date)
  console.log(date.getHours())
  console.log(date.getDate())
}
setInterval(myFunction, 3000)
