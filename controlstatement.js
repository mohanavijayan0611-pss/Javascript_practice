// Control statement is plays a vital role in controlstatement
//Loops
//for,while,do while,foreach,=>for in (Array index kind of data),for of =>based on the object
//for() => declaration and initialization,condition,increment/decrement

console.log("Welcome All");
console.log("Welcome All");
console.log("Welcome All");
console.log("Welcome All");
console.log("Welcome All");

let i;//declaration => instance variable
//        6<=5 => false
for (i=1; i<5; i++){//i=5
  console.log( i + ".Welcome All");

}

console.log(i);//5

let j;
for(j=i; j>0; j--){//5 0>0 => j=0
  console.log(j + ".Hello World");
}

console.log(j);

//While


while(i>=1){//i=5 => 3 times ,i=8
  console.log("I am here hai...!!!");
  i--;
}

console.log(i);

i=0;
//do the what i say then check for the condition
do{
  console.log("Hello are you there...!!!");
  i++;//1
  
}while(i<=0)

  console.log(i);
         //   0  1 2  3  4  5  6  7  8 
let numbers = [5,8,24,34,75,94,78,63,19];
let length = numbers.length;
console.log("Length:",length);
let lastIndex = length-1
console.log(lastIndex);

//console.log(numbers[0])

for(let i=0; i<length;i++){
  console.log(numbers[i]);
  
}

for (let i in numbers){
  console.log(numbers[i]);
  
}

let puppies = ['pug','bully kutta','labrador','rott whieler','golden retriver','shihtzu','lasahso','pekingese','pomorenian','rajapalam','pit bull','bull mastif','german shephered','husky','st.bernard','beagle','poodle'];

for(let puppy in puppies){
  console.log(puppies[puppy]);
  
}

//numbers to be reversed

let num = 12345;//54321

num= "12345";

console.log(num.length);

let reversed='';

for(let n=num.length-1;n>=0;n--){//4,3,2,1,0,-1
  reversed+=num[n];//reversed=reversed + num[n]//54321
}

console.log(reversed);
console.log(typeof(reversed));//Number =>int

num=12345;
reversed=0;
console.log(typeof(reversed));//Number =>integer


while(num>0){

  reversed = reversed*10 + num%10//54321
  num=Math.floor(num/10);//Math.floor(.1) => 0

}

console.log(reversed);

//Jump statement => break and continue

let arrNum = [91,95,56,23];

for (let i in arrNum){
  if(arrNum[i]%7==0){
    console.log(`${arrNum[i]} in the index ${i}`);//91 in the index 0
  break;
  }  
}

for(let i in arrNum){
  if(arrNum[i]%7==0)//satisfied continue,not satisfied print the statement
    continue
  console.log(`${arrNum[i]} in the index ${i}`);
  
}

for(let i=0;i<=10;i++){
  if(i%2==0)
    continue
  console.log("Even Numbers: " ,+ i);
  
}



















