Lookups = new Meteor.Collection("lookups");


Meteor.startup(function () {

    return Meteor.methods({

        removeAllLookups: function () {

            return Lookups.remove({});

        }

    });

});