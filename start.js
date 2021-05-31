// 1. Save a random whole number between -10 and 10 to a variable.
const randomWholeNumber = Math.floor(Math.random() * 21) - 10;
// console.log(randomWholeNumber)
// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"
console.log("Task: 2");
if (randomWholeNumber > 0) {
  console.log(randomWholeNumber, "Ye");
} else {
  console.log(randomWholeNumber, "No");
}
// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"
console.log("Task: 3");
if (randomWholeNumber > 5) {
  console.log(randomWholeNumber, "Winner");
} else if (randomWholeNumber > 0) {
  console.log(randomWholeNumber, "Ok");
} else {
  console.log(randomWholeNumber, "Try again");
}
// 4. Save another random number between -10 and 10 to a variable.
const randomWholeNumber2 = Math.floor(Math.random() * 21) - 10;
// 5. If both variables are more than 5, print "Good scores!"
console.log("Task: 5");
if (randomWholeNumber > 5 && randomWholeNumber2 > 5) {
  console.log("Good scores!");
}
// 6. If either variable is below -9, print "Minus nine!"
console.log("Task:6 ");
if (randomWholeNumber < -9 || randomWholeNumber2 < -9) {
  console.log("Minus nine");
}
// 7. Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". 
// Otherwise, set the message to null.
console.log("Task:7")
const message = (randomWholeNumber+randomWholeNumber2 < 0) ? console.log("We have gońe sub zero") : console.log(null)

