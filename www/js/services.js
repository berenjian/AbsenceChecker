angular
.module('starter.services', [])

.factory('UserStrorage', function() {
  var

  _interface = {
    getUserList: function() {
      return userList;
    },

    getUserById: function(userId) {
      for (var i = 0; i < userList.length; i++) {
        if (userList[i].id === parseInt(userId)) {
          return userList[i];
        }
      }
      return null;
    }
  },

  userList = [
    {
      id: 0,
      name: 'Ali Mihandoost',
      face: 'img/ben.png'
    },
    {
      id: 1,
      name: 'Amirmahdi Berenjian',
      face: 'img/max.png'
    },
    {
      id: 2,
      name: 'Hossein Behkamal',
      face: 'img/adam.jpg'
    },
    {
      id: 3,
      name: 'Mohammad Najafzade',
      face: 'img/perry.png'
    },
    {
      id: 4,
      name: 'Ghasem Sadeghi',
      face: 'img/mike.png'
    }
  ]
  ;

  return _interface;
})
;
