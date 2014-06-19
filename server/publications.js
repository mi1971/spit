Meteor.publish("contactSearch", function(searchText){

    searchText = searchText || "";

    return Contacts.find({firstName: new RegExp("^" + searchText + '.*', "i")});
})

Meteor.publish("activities", function(){
    return Activities.find();
})

Meteor.publish("applications", function(){
    return Applications.find();
})