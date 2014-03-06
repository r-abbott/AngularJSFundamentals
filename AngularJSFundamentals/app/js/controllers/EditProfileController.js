'use strict';

eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder) {
    $scope.userAgent = {};

    $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
    };
});