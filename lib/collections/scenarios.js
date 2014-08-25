Scenarios = new Meteor.Collection("scenarios");

Scenarios.deny({insert: function (userId, doc) {
    doc.createdAt = new Date();
    return false;
}})

Scenarios.allow({insert: function (userId, doc) {
    return true;
}})

Scenarios.allow({remove: function (userId, doc) {
    return true;
}})

Meteor.startup(function () {

    return Meteor.methods({

        removeAllScenarios: function () {

            return Scenarios.remove({});

        }

    });

});