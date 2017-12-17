the_wall.controller('userController', function() {
  
  
  this.users = [
    "Jesse",
    "Michel",
    "Michael",
    "Mikaela",
    "Mike",
    "Jesus"
  ];

  this.addUser = function() {
    console.log('addUser functioon is workinig')

    console.log(this.newUser)

    var userAlreadyExists = false;

    console.log('running for loop')
    for (i = 0; i < this.users.length; i++) {
      console.log(this.users[i])
      if(this.users[i] === this.newUser.name) {
        console.log('User already exists, setting user')
        userAlreadyExists = true;

      }
    }

    if(userAlreadyExists == false) {
      
      console.log('adding new user to existing array')
      this.users.push(this.newUser.name)
      console.log(this.users)
    }


    this.newUser = {};
  }


 
})
