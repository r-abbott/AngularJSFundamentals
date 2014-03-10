'use scrict';

eventsApp.factory('eventData', function ($resource, $q) {
    var resource = $resource('/WebAPI/api/Events/:id', { id: '@id' });

    return {
        getEvent: function(eventId) {
            return resource.get({ id:eventId });
        },
        save: function(event) {
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});