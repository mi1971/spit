Meteor.publish("contacts", function(){
    return Contacts.find();
})

Meteor.publish("contactSearch", function(searchText){

    searchText = searchText || "";

    searchArr = searchText.split(" ");

    if(searchArr.length == 2 && searchArr[1].length > 0)
        return Contacts.find({
            firstName: new RegExp("^" + searchArr[0] + '.*', "i"),
            lastName: new RegExp("^" + searchArr[1] + '.*', "i")
        });
    else
        return Contacts.find({$or:[
            {firstName: new RegExp("^" + searchText + '.*', "i")},
            {lastName: new RegExp("^" + searchText + '.*', "i")}
        ]});
})

Meteor.publish("contactSingle", function(id){
    return Contacts.findOne(id);
})

Meteor.publish("activities", function(){
    return Activities.find();
})

Meteor.publish("applications", function(){
    return Applications.find();
})