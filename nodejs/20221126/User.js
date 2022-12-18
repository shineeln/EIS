// let User = function(userName, lastName) {
//     this.userName = userName,
//     this.lastName= lastName
// }
// module.exports = new User;

class User {
    constructor(username, lastname) {
        this.username = username;
        this.lastname = lastname;
    }
}

module.exports = new User;