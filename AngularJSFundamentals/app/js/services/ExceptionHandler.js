'use strict';

// overrides angulars exception handler service
eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("Exception Handled: " + exception.message);
    };
});