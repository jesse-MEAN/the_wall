the_wall.controller('userController', function(userFactory) {
  
  
  // this.users = [
  //   "Jesse",
  //   "Michel",
  //   "Michael",
  //   "Mikaela",
  //   "Mike",
  //   "Jesus"
  // ];

  this.users = [];

  var _this = this;
  userFactory.index(function(data) {
    console.log(data);
    _this.users = data;
  })


  this.addUser = function() {
    console.log('addUser functioon is workinig')

    console.log(this.newUser)

    var userAlreadyExists = false;

    console.log('running for loop')
    for (i = 0; i < this.users.length; i++) {
      console.log(this.users[i])
      if(this.users[i] === this.newUser.name) {
        console.log('User already exists, setting user')
        break;
        userAlreadyExists = true;

      }
    }

    if(userAlreadyExists == false) {
      
      console.log('adding new user to existing array')
      
      var _this = this;
      userFactory.create(this.newUser, function() {
        userFactory.index(function(data) {
          _this.users = data;
        })

      }, function(output) {
        console.log('Received from factory user creation')
        console.log(output) 
        
      })
      console.log(this.users)
    }


    this.newUser = {};
  }


 
})
