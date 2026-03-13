// function calculateResult(){
//  let n=document.getElementById("subjects").Value;
//  let i;
//  let total=0;
//  for(i=0;i<n;i++){
//    let x=parseFloat(prompt("enter the marks of subject"+(i+1)));
// total+=x;

//  }
//  let average=total/n;
//  let grade;
//  if(average>90){ 
//     grade='A+';}
// else if(average>80){ 
//     grade='B+';}
// else if(average>60){ 
//     grade='C+';}
// else if(average>50){ 
//     grade='D+';}
// else{
//     grade='F';
// }

// let result =document.getElementById("result").innerHTML="total marks"+total+"<br/>"+"Average Marks"+average+"<br/>";

// }



// function calculateResult() {
//     let marks = document.getElementById("marks").value;
//     //  let n=document.getElementById("subjects").Value;
//  let i;
//  let total=0;
//  for(i=0;i<n;i++){
//    let x=parseFloat(prompt("enter the marks of subject"+(i+1)));
// total+=x;

//  }
//     let grade = "";

//     if (marks >= 90) {
//         grade = "A";
//     } 
//     else if (marks >= 75) {
//         grade = "B";
//     } 
//     else if (marks >= 60) {
//         grade = "C";
//     } 
//     else if (marks >= 50) {
//         grade = "D";
//     } 
//     else {
//         grade = "Fail";
//     }

//     document.getElementById("result").innerHTML = "Your Grade: " + grade;
// }

function calculateResult(){

 let n = parseInt(document.getElementById("subjects").value);

 let total = 0;

 for(let i = 0; i < n; i++){
   let x = parseFloat(prompt("Enter the marks of subject " + (i+1)));
   total += x;
 }

 let average = total / n;
 let grade;

 if(average >= 90){ 
    grade = 'A+';
 }
 else if(average >= 80){ 
    grade = 'B+';
 }
 else if(average >= 60){ 
    grade = 'C+';
 }
 else if(average >= 50){ 
    grade = 'D+';
 }
 else{
    grade = 'F';
 }

 document.getElementById("result").innerHTML = "Total Marks: " + total + "<br>" +"Average Marks: " + average + "<br>" +"Grade: " + grade;
}