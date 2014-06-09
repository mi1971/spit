Activities = new Meteor.Collection("activities");

Activities.deny({insert: function(userId, doc) {
    doc.createdAt = new Date();
    return false;
}})

Activities.allow({insert: function(userId, doc) {
    return true;
}})

Activities.allow({remove: function(userId, doc) {
    return true;
}})

Meteor.startup(function() {

    return Meteor.methods({

        removeAllActivities: function() {

            return Activities.remove({});

        }

    });

});