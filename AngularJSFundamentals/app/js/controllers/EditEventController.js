﻿'use strict';

eventsApp.controller('EditEventController', function ($scope,eventData) {
    $scope.event = {};

    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            eventData.save(event);
        }
    };
    $scope.cancelEdit = function () {
        
    };
});