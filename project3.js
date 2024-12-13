let userName ='Khaja';// Enter the name of user
userName ? console.log(`Hello ${userName}!`):console.log('Hello!')//Used Terenary Operator to refine the code into single line rather than if.. else statement.
console.log(`What do you want to know about ${userName}?`);//To increase user interaction with code a formal question is added using string interpolation. 
let userQuestion='Can I reach conqeror?'; // User question can be anything as he/she wish so variable is assigned string value
console.log(`You have asked - ${userQuestion}`);//For user satisfaction, the asked question is printed to console using string interpolation.
let randomNumber=Math.floor(Math.random()*8);/*Used Math.random() to get a decimal number between 0 and 1 and multiplied by 8 so that it can be a number between 1 to7.
After that this whole method is in the peranthesis of Math.floor() which roundoffs the decimal value to nearest whole number. */
let eightBall='';//Declared an empty variable with string value in order to print response.
if (randomNumber===1){//if...else if....else... statements are used to asign random number a text response based on the number.
  eightBall='It is certain';
}else if (randomNumber===2){
  eightBall= 'It is deadly so'
}else if (randomNumber===3){
  eightBall='Reply hazy try again'
}else if (randomNumber===4){
  eightBall='Cannot predict now'
}else if (randomNumber===5){
  eightBall='Do not count on it'
}else if (randomNumber===6){
  eightBall='My sources say no'
}else if (randomNumber===7){
  eightBall='Outlook not so good'
}else 
  eightBall='Signs point to Yes'
console.log(`You got Magic Eight Ball Number ${randomNumber} which says ${eightBall}`);/*By use string interpolation the response
from Maagic eight ball is logged on to the console*/
