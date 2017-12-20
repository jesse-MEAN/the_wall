the_wall.factory('userFactory', function($http) {
    factory = {};

    users = [
        "Jesse",
        "Michel",
        "Michael",
        "Mikaela",
        "Mike",
        "Jesus"
      ];

    factory.index = function(callback) {
        callback(users)
    }

    factory.create = function(info, callback, callback2) {
        console.log('Got the info from controller' + info.name)
        users.push(info.name)
        callback(users);

        var output = users[users.length-1]
        callback2(output);
    }

    return factory;
})