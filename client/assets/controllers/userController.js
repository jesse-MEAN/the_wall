the_wall.controller('userController', function(userFactory, $cookies, $location) {
  
  
  // this.users = [
  //   "Jesse",
  //   "Michel",
  //   "Michael",
  //   "Mikaela",
  //   "Mike",
  //   "Jesus"
  // ];

  this.users = [];

  if($cookies.get('userId')) {
    console.log('User removed from session')
    $cookies.remove('userId')
  }

  var _this = this;
  userFactory.index(function(data) {
    console.log(data);
    _this.users = data;
  })

  this.go = function(path) {
    $location.path(path);
  }

  this.addUser = function() {
    console.log('addUser functioon is workinig')

    console.log(this.newUser)

    var userAlreadyExists = false;

    console.log('running for loop')
    for (i = 0; i < this.users.length; i++) {
      console.log(this.users[i])
      if(this.users[i] === this.newUser.name) {
        console.log('User already exists, setting user')
        // $cookies.put('userId', this.users[id]._id);
        $cookies.put('userName', this.users[i]);
        userAlreadyExists = true;
        // console.log($cookies.get('userId'))
        console.log($cookies.get('userName'))
        this.go('/dashboard')
        break;

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

        // $cookies.put('userId', output._id)
        $cookies.put('userName', output)
        _this.go('/dashboard')
      })
      console.log(this.users)
    }


    this.newUser = {};
  }


 
})
