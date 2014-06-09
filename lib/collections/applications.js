Applications = new Meteor.Collection("applications");

//Applications.deny({insert: function(userId, doc) {
//    doc.createdAt = new Date();
//    return false;
//}})
//
//Applications.allow({insert: function(userId, doc) {
//    return true;
//}})
//
//Applications.allow({remove: function(userId, doc) {
//    return true;
//}})

Meteor.startup(function() {

    if(Applications.find().count() < 1){
        Applications.insert({
            client: 'John and June Citizen',
            amount: 355000,
            description: 'Purchase first home with 5% genuine savings'
        });
        Applications.insert({
            client: 'Peter and Michelle Solomon',
            amount: 290000,
            description: 'Purchase investment property using existing home as equity'
        });
        Applications.insert({
            client: 'Matt and Linda Ireland',
            amount: 175000,
            description: 'Purchase land to build duplex'
        });
    }

});