'use strict';

angular.module('culturalystApp')
  .controller('DashUserCtrl', function ($scope, $log, Auth, $http, $state) {
    $scope.message = 'Hello';
    $http.get('/api/users/me').then(function(res) {
      $scope.me = res.data;
      $log.log($scope.me);
    });
    $state.go('dashUser.myList');
    $scope.mediums = {
      music: false,
      writing: false,
      film: false,
      visualArt: false,
      photography: false,
      dance: false,
      cultureBearers: false,
      comedy: false,
      performingArts: false,
      design: false,
      code: false,
      gaming: false
    };

    $scope.toggleMedium = function(medium) {
      $scope.mediums[medium] = $scope.mediums[medium] === false ? true : false;
    }

    $scope.favorites = [
      {
        img: "https://github.com/smbowler/culturalyst-yeoman/blob/feat/artistCard/client/assets/img/ar.png?raw=true",
        name: 'Alon',
        title: 'Rapper Extraordinaire'
      },
      {
        img: "https://github.com/smbowler/culturalyst-yeoman/blob/feat/artistCard/client/assets/img/profile.png?raw=true",
        name: 'Sam',
        title: 'Sculptor'
      },
      {
        img: "https://github.com/smbowler/culturalyst-yeoman/blob/feat/artistCard/client/assets/img/bk.png?raw=true",
        name: 'Brian',
        title: 'Philosopher'
      },
      {
        img: "https://raw.githubusercontent.com/smbowler/culturalyst-yeoman/feat/artistCard/client/assets/img/mykia.png",
        name: 'Mykia',
        title: 'CSS Sorceress'
      }
    ];

    $scope.saveToDB = function() {
      // check mediums table for true values (on DOM?)
      // add trues values to something like
        // api/users/mediums
    }
  });
