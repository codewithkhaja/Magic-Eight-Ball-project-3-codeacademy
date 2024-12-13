let userName ='Khaja';
userName ? console.log(`Hello ${userName}!`):console.log('Hello!')
console.log(`What do you want to know about ${userName}?`);
let userQuestion='Can I reach conqeror?';
console.log(`You have asked - ${userQuestion}`);
let randomNumber=Math.floor(Math.random()*8);
let eightBall='';
if (randomNumber===1){
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
console.log(`You got Magic Eight Ball Number ${randomNumber} which says ${eightBall}`);