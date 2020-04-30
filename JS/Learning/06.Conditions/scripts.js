/*CONDITIONS
 --------------------------------*/
let num = 5;
let num1 = 20;

//Comparison operators :
/* >
   <
   >=
   <=
   ==
   ===
   !=
   !==*/

   // simple condition 
if (num > 0) {
  console.log("TRUE!");
}
else {
  console.log("FALSE!")
}
// a strict equality check condition
if(num ==="5"){
  console.log("TRUE!");
}
else {
  console.log("stri", "FALSE!")
}


//a double check with or 
if (num > 5 ||num1 < 30 ){
  console.log("double check or", "TRUE!");
}
else {
  console.log("double check or","FALSE!")
}

//a double check with or 
if (num > 5 && num1 < 30 ){
  console.log("double check and", "TRUE!");
}
else {
  console.log("double check and","FALSE!")
}

//using not operator

if (num != 5 ){
  console.log("TRUE!");
}
else {
  console.log("FALSE!")
}

//complex checks
if ((num === 5 && num > 5) || (num1 == 20 && num1 > 20)){
  console.log("yes", "TRUE!");
}
else {
  console.log("yes", "FALSE!")
}

// CHALLENGE

function message(){

  let date = new Date();
  let hour = date.getHours(); console.log(hour);
  let output = "";
  if (hour < 8){
    output ="What are you doing that early?";
};

  if (hour >= 8 && hour< 12) {
    output= "Good morning";

  }
  if (hour >= 12 && hour< 17) {
    output="Good afternoon";

  }
  if (hour >= 17 && hour< 21) {
    output="Good evening";

  }
  if (hour >= 21) {
    output="Good night";

  }
  
console.log(output);
}


message();
//----------------------------------
function number() {
 let input= "";
 if (num <= 0){
   input= "the number is less than or equal to zero!"
 }
 else{
   input= "the number is greater than zero"
 }
 console.log(input);
}
number(2);
//-----------------------------------------
function even_odd() {
  let num2= "";
  if (even = 2*num2){
    num2= "the number is even"
  }
  else{
    num2= "the number is odd"
  }
  console.log(num2);
 }
 even_odd(9);
//------------------------------------
 function even_odd() {
  let num2= "";
  if (even = 2*num2){
    num2= "the number is even"
  }
  else{
    num2= "the number is odd"
  }
  console.log(num2);
 }
 even_odd(9);
//-------------------------------------
 function area(len, wid) {
  
  
  console.log("The area is", len*wid,"m2");
 }
 area(2, 4);
//------------------------------------
 function remainder(div, divd) {
  
  
  console.log("The remainder is", div%divd);
 }
 remainder(5, 4);
