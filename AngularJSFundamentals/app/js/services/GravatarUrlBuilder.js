'use strict';

eventsApp.factory('gravatarUrlBuilder', function() {
    return {
        buildGravatarUrl: function(email) {
            var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
            return defaultGravatarUrl;
        }
    };
});