//conditional statement used to make decision in javascript.
//it excecute code blocks based on the condition

let a=8;
let b=5;

if(a>b){
  console.log('A is greater than B');
}

if(a<b){
  console.log('A is greater than B');
}else{
  console.log('A is not greter than B');
}

let marks=20;
if(marks>75){
  console.log("Grade A");
}else if(marks>60){
  console.log("grade B");
}else if(marks>35){
  console.log("grade C");
}else{
  console.log('you dont have any grade');
}

let height=120;
let weight=50;
let age=19;

if(height>=120){
  if(weight>=50){
    if(age>=18){
      console.log('you are allowed to give blood');
    }else{
      console.log('less age');
    }
  }else{
    console.log("less weight");
  }
}else{
  console.log("less height");  
}
//switch statement
//used when you compare one value with many cases.

let day=3;
switch(day){
  case 1:
    console.log("Monday");
    break;  
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  default:
    console.log("invalid day"); 
}

//using the prompt get input from the user

let num = parseInt(prompt(`
  press 1 for withdrawal
  press 2 for deposit
  press 3 for balance enquiry
  press 4 for pin change
  press 5 mobile number change
  `));

  console.log(typeof(num));

  switch(num){
    case 1:
      console.log("withdraw success");
      break;
    case 2:
      console.log("deposit success");
      break;
    case 3:
      console.log(("balance enquiry success"));
      break;
    case 4:
      console.log("pin change success");
      break;
    case 5:
      console.log("mobile number change success");
      break;
    default:
      console.log("Invalid input"); 
  }
  