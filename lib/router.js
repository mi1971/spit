Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function(){
    this.route('home', {path: '/',
        waitOn: function() {
            return Meteor.subscribe('activities');
        },
        data: function () {
            templateData = { activities: Activities.find() };
            return templateData;
        }
    });
    this.route('profile');
    this.route('login');
    this.route('forgot-password');
    this.route('signup');
    this.route('contacts', {
        waitOn: function() {
            return Meteor.subscribe('contactSearch', Session.get("searchText"));
        },
        data: function () {
            templateData = { contacts: Contacts.find() };
            return templateData;
        }
    });

    this.route('contact', {
            path: '/contacts/:_id'
    })

    this.route('applications', {
        waitOn: function() {
            return Meteor.subscribe('applications');
        },
        data: function () {
            templateData = { applications: Applications.find() };
            return templateData;
        }
    });

    this.route('activities', {
        waitOn: function() {
            return Meteor.subscribe('activities');
        },
        data: function () {
            templateData = { activities: Activities.find() };
            return templateData;
        }
    });

    this.route('uploadContacts', {path: 'upload-contacts'});
})