'use scrict';

eventsApp.factory('eventData', function () {
    return {
        event: {
            name: "Angular Boot Camp",
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs...',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at the...',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bill Withers',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'You like Bill Withers? Let\'s play some Bill Withers together, but well behaved. Controller style!',
                    upVoteCount: 0
                }
            ],
        }
    };
});