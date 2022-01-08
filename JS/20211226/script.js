var test = Math.random().toString();
var str = test.split('.')[1];
console.log(str);


var users = [
    {
        name: 'Bat',
        password:'batpass',
        age:20,
        email: 'bat@gmail.com',
        mobile:12354664
    },
    {
        name: 'Bold',
        password:'boldpass',
        age:22,
        email: 'bold@gmail.com',
        mobile:23423423
    },
    {
        name: 'John',
        password:'johnpass',
        age:40,
        email: 'john@gmail.com',
        mobile:56756765
    },
    {
        name: 'Mike',
        password:'mikepass',
        age:45,
        email: 'mike@gmail.com',
        mobile:79796756
    },
    {
        name: 'Jenn',
        password:'jennpass',
        age:23,
        email: 'jenn@gmail.com',
        mobile:34565567
    },
];

var email = prompt("Email oruulna uu?");
var password = prompt("Password oruulna uu?");


for(var i = 0; i < users.length; i++) {  
    if(users[i].email == email && users[i].password == password) {
        console.log(users[i])
    } 
}