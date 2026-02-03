// array is a way to store multiple values in a single variable using 
// index poitioning

let arr = [12,"mohana",785.398,124563.58976,true,'C']
console.log(arr);

console.log(arr.length);

console.log(arr.length-1);

let matrix = [[1,2,3],[4,[3,4,5],6],[7,8,9]];
console.log(matrix[2][1]);

let char = ['a','b','c','d','e']

//push
char.push('f');
console.log(char);

//pop
let pop = char.pop();
console.log(pop);
console.log(char);

pop=char.pop()
console.log(char);

pop=char.pop()
console.log(char);

//shift
char.shift();
console.log(char);

//unshift
char.unshift('x');
console.log(char);

//splice
//char.splice(1,1);(position),(how many elemts to be delete)
char.splice(1,1,'n','y');
console.log(char);

char.splice(3,0,"mohana","vijayan");
console.log(char);

//concat
let concat = char.concat("Mohana")
console.log(concat);

//join
let join = char.join();
console.log(join);
// char.reverse();
console.log(char.reverse());

//string => split

let str = "Madhu chandrika";
console.log(str);

let strArray=str.split(" ");
console.log(strArray);

for (let i=0;i<strArray.length;i++){
  console.log(strArray[i]);
  
}

//concat vs spread operator
let firstArray = [1,2,3];
let secondArray = [4,5,6];

let concatinated = firstArray.concat(secondArray);
console.log(concatinated);

let spread = [...firstArray,...secondArray];
console.log(spread);

let numbers = [5,8,24,34,78,52,3,98];

numbers.sort((x,y)=>x-y);
console.log(numbers);

numbers.sort((x,y)=>y-x);
console.log(numbers);

let puppies = ['pug','bully kutta','labrador','rott whieler','golden retriver','shihtzu','lasahso','pekingese','pomorenian','rajapalam','pit bull','bull mastif','german shephered','husky','st.bernard','beagle','poodle'];

console.log(puppies.sort());

console.log(puppies.sort().reverse());
























