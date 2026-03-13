
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

let employees = []

function addEmployee(){

let name = document.getElementById("name").value
let id = document.getElementById("empid").value
let salary = Number(document.getElementById("salary").value)
let dept = document.getElementById("dept").value

let emp = {
name:name,
id:id,
salary:salary,
department:dept
}

employees.push(emp)

alert("Employee Added")

}

function displayEmployees(){

let output = document.getElementById("output")
output.innerHTML=""

for(let emp of employees){

output.innerHTML +=
`Name: ${emp.name} | ID: ${emp.id} | Salary: ${emp.salary} | Dept: ${emp.department} <br>`

}

}

function filterSalary(){

let output = document.getElementById("output")

let highSalary = employees.filter(emp => emp.salary > 50000)

output.innerHTML="Employees with Salary > 50000 <br>"

for(let emp of highSalary){

output.innerHTML +=
`${emp.name} - ${emp.salary} <br>`

}

}

function totalSalary(){

let total = 0

for(let emp of employees){
total += emp.salary
}

document.getElementById("output").innerHTML =
"Total Salary Payout: ₹ " + total

}

function averageSalary(){

let total = 0

for(let emp of employees){
total += emp.salary
}

let avg = total / employees.length

document.getElementById("output").innerHTML =
"Average Salary: ₹ " + avg

}

function countDepartment(){

let dept = prompt("Enter Department Name")

let count = 0

for(let emp of employees){

if(emp.department.toLowerCase() == dept.toLowerCase()){
count++
}

}

document.getElementById("output").innerHTML =
"Employees in " + dept + " Department: " + count

}