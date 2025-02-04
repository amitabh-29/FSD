// function myFunction()
// {
//     var carname = "I am Abhay Pratap Singh";
//     document.getElementById("demo").innerHTML = carname;
// }

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id :5566,
//     getinfo : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// document.getElementById("demo").innerHTML = person.getinfo();

// Arrow function
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// var add2 = (a,b) => {
//     console.log(a+b);
// };
// add2(102,20)
// var add3 = (a,b) => console.log(a+b);
// add3(30,20);

// function myfunction() {
//     var x = 5 + 5;
//     var y = "5" + 5;
//     var z = "Hello" + 5;
//     var demoP = document.getElementById("demo");
//     demoP.innerHTML = x + "<br>" + y + "<br>" + z;
// }

// var myCollection = [
//     1,
//     "meera mam",
//     true,
//     {
//         name1: "ABHAY",
//         age: 30
//     },
//     function(name1) {
//         console.log(name1);
//     },
//     ['Abhishek', 'Bachchan', "Amitabh", "Bachchan"]
// ];
// console.log(myCollection);

// Date: 27-12-24

function information(firstName, lastname, language){
    if(arguments.length === 3){
        console.log(firstName);
        console.log(lastname);
        console.log(language);
    }
}

information();
information('Jitendra', 'Kumar', 'Hindi');

