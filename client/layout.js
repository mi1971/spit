function userEmail(){
    return (Meteor.user() ? Meteor.user().emails[0].address.toString() : "");
}


Template.userMenu.displayUser = function() {
    return userEmail();
}

Template.userMenu.gravatar = function() {
    return Gravatar.imageUrl(userEmail());
}

Template.header.events({
    'keyup #mainSearch': function (e, t) {
        //alert(t.find("#mainSearch").val());
        event.preventDefault();
        Session.set("searchText", $("#mainSearch").val());
        //Session.set("searchText", "Ma");
    }
})