alert('enter 10 students');

let students = [];
for (i=1;i<=10;i++)
{
    
        let student = prompt('add student');
        students.push(student);


};

students.forEach(element => {
    console.log(element);
});
