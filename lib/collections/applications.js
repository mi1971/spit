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


});