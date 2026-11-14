let student=[
    {
        name: "Abdul rehman",
        marks: 21
    },
    {
        name: "aqsa",
        marks: 97
    },
    {
        name: "eesar hussain",
        marks: 89
    },
    {
        name: "Asad",
        marks: 34
    },
    {
        name: "Ayesha",
        marks: 90
    }
];




console.log("accessing first student ")
console.log(student[0]);   //accessing student data

//updating student record
student[1].marks=67;
console.log("After Updating aqsa's Marks:");
console.log(student[1]);

//displaying using foreach
console.log("all student names:");
student.forEach(function(students){
    console.log(students.name + ":",students.marks);
 

});

//adding new student
student.push({
    name: "Bilal",
    marks: 45
})

//displaying using foreach
console.log("all student names after adding new student:");
student.forEach(function(students){
    console.log(students.name + ":",students.marks);

});


//filterring using filter
console.log("filter marks above 70:");
let passedstudents=student.filter(function(students){
   return students.marks>70;
});
console.log("Students scoring above 70:");
console.log(passedstudents);

// using map
console.log("studentnames by using map query"); 
let studentnames=student.map(function(students){
    return students.name;
});
console.log(studentnames); 
  
// usinf find
console.log("student names searching"); 
let searchstudent=student.find(function(students){
    return students.name==="Abdul rehman";
});

console.log(searchstudent); 


