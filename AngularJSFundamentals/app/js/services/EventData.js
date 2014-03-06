'use scrict';

eventsApp.factory('eventData', function ($resource, $q) {
    var resource = $resource('/WebAPI/api/Events/:id', { id: '@id' });

    return {
        getEvent: function() {
            var deferred = $q.defer();
           resource.get({ id: 1 },
                    function(event) {
                        deferred.resolve(event);
                    },
                    function(response) {
                        deferred.reject(response);
                    }
                );
            return deferred.promise;
        },
        save: function(event) {
            var deferred = $q.defer();
            resource.save(event,
                function(response) { deferred.resolve(response); },
                function(response) { deferred.reject(response); }
            );
            return deferred.promise;
        }
    };
});