Liabilities = new Meteor.Collection("liabilities");

Liabilities.deny({insert: function (userId, doc) {
    doc.createdAt = new Date();
    return false;
}})

Liabilities.allow({insert: function (userId, doc) {
    return true;
}})

Liabilities.allow({update: function (userId, doc) {
    return true;
}})

Liabilities.allow({remove: function (userId, doc) {
    return true;
}})

Meteor.startup(function () {

    return Meteor.methods({

        removeAllLiabilities: function () {

            return Liabilities.remove({});

        }

    });

});