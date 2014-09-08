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
    this.route('application');

    this.route('scenario', {
            path: '/scenario/:_id',
            waitOn: function(){
                Meteor.subscribe("scenarios"),
                Meteor.subscribe("liabilitiesForScenario", this.params._id),
                Meteor.subscribe("lookups");
            },
            data: function () {
                return {
                    scenario: Scenarios.findOne(this.params._id),
                    cards: Liabilities.find({type:"Card"}),
                    commitments: Liabilities.find({type:"Commitment"}),
                    lookups: Lookups.find()
                };
            }
        }
    );

    this.route('scenarios', {
            waitOn: function () {
                return [Meteor.subscribe("scenarios")
//            ,Meteor.subscribe("activities")
                ];
            },
            data: function () {
                return {
                    scenarios: Scenarios.find({})
//            ,
//            application: Applications.findOne(this.params._id)
                }
            }
        }
    );

    this.route('clientActivity', {
        layoutTemplate: 'layoutClient',
        path: '/client/:_id',
        waitOn: function(){
            return [Meteor.subscribe("applications"),
                Meteor.subscribe("activities")
            ];
        },
        data: function () {
            return {
                activities: Activities.find({applicationId: this.params._id}),
                application: Applications.findOne(this.params._id)
            }
        }
    });

    this.route('clientDocuments', {
        layoutTemplate: 'layoutClient',
        path: '/client/:_id/documents',
        waitOn: function(){
            return [Meteor.subscribe("applications"),
                Meteor.subscribe("activities")
            ];
        },
//        data:{
//            application: function () {return Applications.findOne(this.params._id)}//,
//            activities: function () {return Activities.find({applicationId:this.params._id})}
//        }
        data: function () {
            return {
                activities: Activities.find({applicationId:this.params._id}),
                application: Applications.findOne(this.params._id)
            };
        }
    });

    this.route('clientProfile', {
        layoutTemplate: 'layoutClient',
        path: '/client/:_id/profile',
        waitOn: function(){
            return [Meteor.subscribe("applications"),
                Meteor.subscribe("activities")
            ];
        },
        data: function () {
            return {
                activities: Activities.find({applicationId: this.params._id}),
                application: Applications.findOne(this.params._id)
            }
        }
    });

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
        path: '/contacts/:_id',
        waitOn: function(){
            Meteor.subscribe("contacts");
        },
        data: function () {
            return Contacts.findOne(this.params._id);
        }
    });


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

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin);

var requireLogin = function(pause) {
    if(Meteor.loggingIn()) {// still logging in
        pause();
    }

    if(! Meteor.user()) { // not logged in
        this.render('accessDenied') ;
        pause();
    } else { // logged in already
//console.log("already logged in all good");
    }
};