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
      lastText: 'You on your way?',
      face: 'img/ben.png'
    },
    {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    },
    {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    },
    {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    },
    {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }
  ]
  ;

  return _interface;
})
;
