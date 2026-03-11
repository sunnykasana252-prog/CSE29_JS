// loops 
// let x;
// for(x=0;x<10;x++){
//     console.log(x);
// }

// var count;
// document.write("starting loop"+"</br>");
// for(count=0;count<10;count++){
//     document.write("current count :"+count+"<br/>");
    
// }
// document.write("loop stopped");

//for in loop
// for(key in object){

// }
// const person={
//     fname:"Ajay",
//     lname:"Singh",
//     age:25
// };
// for(let x in person){
//     console.log("person details "+ x +":"+ person[x]+"<br/>")
// }
 var grade ='A';
    document.write("Entering switch block <br/>");
    switch(grade){
        case 'A': document.write("Good job <br/>");
        break;

        case 'B': document.write("preety good <br/>");
        break;
        case 'C': document.write("passed<br/>");
        break;
        default : document.write("Unknown grade <br/>");
    }
    document.write("exiting switch block ");