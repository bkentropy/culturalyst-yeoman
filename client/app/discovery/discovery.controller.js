'use strict';

angular.module('culturalystApp')
.controller('DiscoveryCtrl', function($scope, MediaList, $http, $location){
  $scope.mediaList = MediaList.getMediaList();
  // console.log($scope.artists)

  $scope.getArtists = function() {
    $http.get('/api/users/discovery/' + $scope.selectedMedium + '/' + $scope.selectedSubmedium).then(function(response) {
      $scope.artists = response.data;
      // console.log(response.data, "GET ARTISTS");
    })
  }

  $scope.loadSubMediums = function(medium){
    // console.log(medium.name)
    $scope.selectedMedium = medium.name;
    $scope.submedia = medium.submedia;
  };

  $scope.populatePage = function() {
    $scope.pageMedium = $location.path().split('/').pop();
    $http.get('/api/users/discovery/' + $scope.pageMedium + '/undefined' ).then(function(response) {
      $scope.artists = response.data;
      console.log($scope.pageMedium, 'populatePage');
    })
  }
  $scope.populatePage()

});
