//loops is used to repeat a block of code multiple times.
//It is very usefull to working with arrays,numbers,lists or repeated actions
//for loop.
//Structure - start value,cindition,increment or decrement.
for(let i=0; i<6;i++){
  console.log(i);
}

//while loop:
//it rus as long as condtition is true
//use number iteration not fixed.

let i=0;
while(i<6){
  console.log();
  i++;
}

//do...while
//runs atleast once,then checks condition.

i=2;

do{
  console.log(i);
  i++; 
}while(i<5);

//for..of loop

let fruits = ["apple","banana","mango"];

for(let fruit of fruits){
  console.log(fruit);
  
}

//for in loops

let person = {
  fname:"Mohana",
  age:33
};

for(let key in person){
  console.log(key,person[key]);
  
}